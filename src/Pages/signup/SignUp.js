import React, { Component } from 'react';
import './SignUp.css';
import {Input, Button} from '../../component/form/input';

class SignUp extends Component {
  constructor () {
    super();
    this.state = {
      enterId: "",
      enterName: "",
      enterPw: "",
      confirmPw: "",
      enterProfile: "",
      checked: false
    }
  }

  handleChange = (e) => {
    this.setState({ [e.name] : e.value }, () => {
      const {
        enterId,
        enterName,
        enterPw,
        confirmPw,
        enterProfile
      } = this.state;

      this.setState({
        checked: enterId !== "" && enterName !== "" && enterPw !== "" && confirmPw !== "" 
        && enterProfile !== ""
       })
    })      
  }

  render() {
    return (
      <div className="container">
       <img className="logo" src="https://upload.wikimedia.org/wikipedia/fr/thumb/c/c8/Twitter_Bird.svg/944px-Twitter_Bird.svg.png"/>
       <header><b>Sign up to Miniter</b></header>
        <div className="input-container">
          <form>
            <Input 
              type="text" 
              name="enterId"
              placeholder="Enter ID" 
              autocomplete="enter-Id" 
              className="newId"
              changeBtnColor={this.handleChange}
            />
            <Input 
              type="text" 
              name="enterName"
              placeholder="Enter Name" 
              autocomplete="enterName" 
              className="newName"
              changeBtnColor={this.handleChange}
            />
            <Input 
              type="password" 
              name="enterPw"
              placeholder="Password" 
              autocomplete="current-password" 
              className="newPassword"
              changeBtnColor={this.handleChange}
            />
            <Input 
              type="password" 
              name="confirmPw"
              placeholder="Confirm Password" 
              autocomplete="enterProfile" 
              className="confirmPassword"
              changeBtnColor={this.handleChange}
            />
            <Input 
              type="text" 
              name="enterProfile"
              placeholder="Profile" 
              autocomplete="enterProfile" 
              className="newProfile"
              changeBtnColor={this.handleChange}
            />
            <Button 
              className={` ${this.state.checked ? 'blue-btn signup-btn' : 'signup-btn'}`} 
              innerHTML="Sign Up"
            />
        </form>
      </div>
    </div>
    );
  }
}

export default SignUp;
