import React from 'react';

const Textarea = props => {
    return (
        <textarea  
            value={props.value}
            className={props.className} 
            placeholder={props.placeholder}
            onChange={props.handleInput}
        />
    );
}

export default Textarea;