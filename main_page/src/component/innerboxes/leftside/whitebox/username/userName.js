import React from 'react';
import './userName.css'

class UserName extends React.Component {

    constructor() {
        super();
        this.state = {
            value : "Jason Kang"
        }
    }
    render() {
        return (
            <div className="UserName">
                {this.state.value}
            </div>
        );
    }
}

export default UserName;