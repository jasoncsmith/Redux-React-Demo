import './spinner.css';

import { IPropsSpinner } from '../../interfaces';

const Spinner = ({ scale }: IPropsSpinner) => {
    return (
        <div
            style={{
                transform: `scale(${scale || '100%'}, ${scale || '100%'})`,
            }}
            className="lds-roller"
        >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Spinner;
