import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getCars, createCar, deleteCar } from '../../redux/actions/actionCars';
import Spinner from '../common/Spinner';
import Button from '../common/Button';
function Car(props) {
    const { id, model, make, year, color, deleteCar } = props;
    return (
        <div
            className="car"
            style={{ border: '1px solid white', marginBottom: '20px' }}
        >
            <div>{year}</div>
            <div>{make}</div>
            <div>{model}</div>
            <div>{color}</div>
            <Button
                text={'Delete Your Car!'}
                onClickFn={() => deleteCar(id)}
            />
        </div>
    );
}

function CarShowcase({ cars, trucks, getCars, createCar, deleteCar }) {
    const [isWaiting, setIsWaiting] = useState(false);

    trucks.length > 0 &&
        console.log('Cars component has access to trucks:', trucks);

    function handleCreateCar() {
        setIsWaiting(true);
        createCar().then(() => setIsWaiting(false));
    }

    function handleDeleteCar(carId) {
        deleteCar(carId);
    }

    useEffect(
        function () {
            if (cars.length === 0) {
                setIsWaiting(true);
                getCars().then(() => setIsWaiting(false));
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    return (
        <div>
            <h1>Cars, Cars, Cars</h1>
            {cars.filter((c) => c.id === 3).length === 0 ? (
                <Button
                    text={'Create a New Car!'}
                    onClickFn={handleCreateCar}
                />
            ) : (
                ''
            )}
            {isWaiting ? <Spinner /> : ''}

            {cars.map((car) => (
                <Car
                    key={car.id}
                    id={car.id}
                    model={car.model}
                    make={car.make}
                    year={car.year}
                    color={car.color}
                    deleteCar={handleDeleteCar}
                />
            ))}
        </div>
    );
}

CarShowcase.propTypes = {
    cars: PropTypes.array,
    trucks: PropTypes.array,
    getCars: PropTypes.func.isRequired,
    createCar: PropTypes.func.isRequired,
    deleteCar: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return { cars: state.cars, trucks: state.trucks };
}

const mapDispatchToProps = {
    getCars: getCars,
    createCar: createCar,
    deleteCar: deleteCar,
};

export default connect(mapStateToProps, mapDispatchToProps)(CarShowcase);
