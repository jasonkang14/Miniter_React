import React from 'react';

class Button extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <button 
                className={this.props.className}
                name={this.props.name}
                onClick={this.props.btnClicked}
            >
                {this.props.innerHTML}
            </button>
        );
    }
}

class Textarea extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <textarea 
                value={this.props.value}
                className={this.props.className} 
                placeholder={this.props.placeholder}
                onChange={(event) => this.props.handleInput(event.target)}
            />
        );
    };
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
                placeholder={this.props.placeholder} 
                autocomplete={this.props.autocomplete}
            />
        );
    }
}

export {
    Input,
    Button,
    Textarea,
}