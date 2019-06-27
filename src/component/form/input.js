import React from 'react';

const Input = props => {
    return (
        <input 
            className={props.className} 
            type={props.type} 
            name={props.name}
            placeholder={props.placeholder} 
            autoComplete={props.autoComplete}
            onChange={props.changeInput}
            required
        />
    );
}

export default Input;