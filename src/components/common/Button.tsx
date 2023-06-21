import React from 'react';
import { IPropsButton } from '../../interfaces';

const Button = ({ text, onClickFn }: IPropsButton) => {
    return (
        <button
            type="button"
            onClick={onClickFn}
            style={{
                backgroundColor: 'blue',
                color: 'white',
                marginBottom: '15px',
                marginTop: '15px',
            }}
        >
            {text}
        </button>
    );
};

export default Button;
