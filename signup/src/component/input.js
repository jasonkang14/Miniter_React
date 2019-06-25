import React from 'react';

class Button extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <button className={this.props.className}>
                <b>{this.props.innerHTML}</b>
            </button>
        );
    }
}

class Input extends React.Component {

    constructor() {
        super();
    }

    render() { 
        return (
            <input 
                className={this.props.className} 
                type={this.props.type} 
                name={this.props.name}
                placeholder={this.props.placeholder} 
                autoComplete={this.props.autoComplete}
                onChange={(event) => this.props.changeBtnColor(event.target)}
            />
        );
    }
}

export {
    Input,
    Button,
}