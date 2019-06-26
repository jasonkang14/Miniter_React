import React from 'react';

const Button = props => {
    return (
        <button 
            className={props.className}
            name={props.name}
            onClick={props.btnClicked}
        >
            {props.innerHTML}
        </button>
    );
}

export default Button;