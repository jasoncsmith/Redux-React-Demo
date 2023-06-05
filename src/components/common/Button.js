import React from 'react';
const Button = ({ text, onClickFn }) => {
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
