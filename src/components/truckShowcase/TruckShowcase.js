import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import Button from '../common/Button';

import {
    getTrucks,
    createTruck,
    deleteTruck,
} from '../../redux/actions/actionTrucks';

function Truck(props) {
    const { id, model, make, year, color, deleteTruck } = props;
    return (
        <div
            className="truck"
            style={{ border: '1px solid white', marginBottom: '20px' }}
        >
            <div>{year}</div>
            <div>{make}</div>
            <div>{model}</div>
            <div>{color}</div>
            <Button
                text={'Delete Your Truck'}
                onClickFn={() => deleteTruck(id)}
            />
        </div>
    );
}

function TruckShowcase({ trucks = [], getTrucks, createTruck, deleteTruck }) {
    const [isWaiting, setIsWaiting] = useState(false);

    useEffect(
        function () {
            if (trucks.length === 0) {
                setIsWaiting(true);
                getTrucks().then(() => setIsWaiting(false));
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    function handleCreateTruck() {
        createTruck();
    }

    function handleDeleteTruck(truckId) {
        deleteTruck(truckId);
    }

    return (
        <div>
            <h1>Trucks, Trucks Trucks</h1>
            {trucks.filter((c) => c.id === 3).length === 0 ? (
                <Button
                    text={'Create a New Truck!'}
                    onClickFn={handleCreateTruck}
                />
            ) : (
                ''
            )}
            {isWaiting ? <Spinner /> : ''}

            {trucks.map((truck) => (
                <Truck
                    key={truck.id}
                    id={truck.id}
                    model={truck.model}
                    make={truck.make}
                    year={truck.year}
                    color={truck.color}
                    deleteTruck={handleDeleteTruck}
                />
            ))}
        </div>
    );
}

TruckShowcase.propTypes = {
    trucks: PropTypes.array,
    getTrucks: PropTypes.func,
    createTruck: PropTypes.func,
    deleteTruck: PropTypes.func,
};

function mapStateToProps(state) {
    return { trucks: state.trucks };
}

const mapDispatchToProps = {
    createTruck: createTruck,
    deleteTruck: deleteTruck,
    getTrucks,
};

export default connect(mapStateToProps, mapDispatchToProps)(TruckShowcase);
