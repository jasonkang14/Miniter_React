import React, { Component } from 'react';
import './signUp.css';
import Input from '../../Component/Form/Input';
import Button from '../../Component/Form/Button';
import { withRouter } from  'react-router-dom';

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

  handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value }, () => {
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

  signedUp = (event) => {
    event.preventDefault();
    alert("회원가입 성공");
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="container">
       <img className="logo" src="https://upload.wikimedia.org/wikipedia/fr/thumb/c/c8/Twitter_Bird.svg/944px-Twitter_Bird.svg.png" alt="twitterlogo"/>
       <header><b>Sign up to Miniter</b></header>
        <div className="input-container">
          <form>
            <Input 
              type="text" 
              name="enterId"
              placeholder="Enter ID" 
              autocomplete="enter-Id" 
              className="newId"
              changeInput={this.handleChange}
            />
            <Input 
              type="text" 
              name="enterName"
              placeholder="Enter Name" 
              autocomplete="enterName" 
              className="newName"
              changeInput={this.handleChange}
            />
            <Input 
              type="password" 
              name="enterPw"
              placeholder="Password" 
              autocomplete="current-password" 
              className="newPassword"
              changeInput={this.handleChange}
            />
            <Input 
              type="password" 
              name="confirmPw"
              placeholder="Confirm Password" 
              autocomplete="enterProfile" 
              className="confirmPassword"
              changeInput={this.handleChange}
            />
            <Input 
              type="text" 
              name="enterProfile"
              placeholder="Profile" 
              autocomplete="enterProfile" 
              className="newProfile"
              changeInput={this.handleChange}
            />
            <Button 
              className={` ${this.state.checked ? 'blue-btn signup-btn' : 'signup-btn'}`} 
              innerHTML="Sign Up"
              btnClicked={this.signedUp}
            />
        </form>
      </div>
    </div>
    );
  }
}

export default withRouter(SignUp);
