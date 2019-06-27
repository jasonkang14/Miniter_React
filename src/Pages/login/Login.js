import React from 'react';
import './Login.css';
import Input from '../../component/form/input';
import Button from '../../component/form/button';
import { withRouter } from  'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userId : "",
      password : "",
      checked : false,
    }
  }

  handleChange = (event) => {
    this.setState(
      {[event.target.name] : event.target.value}, () => {
        const {
          userId,
          password,
        } = this.state;

        this.setState({
          checked: userId !== "" && password !== ""
         })
      }
    )
  }

  loginToMiniter = () => {
    console.log("outside if", this.props.history);
    fetch("http://localhost:8000/api/login", {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        "user": this.state.userId,
        "password": this.state.password
      })
    })

    .then (
      (response) => {
        response.json().then((data) => {
          if (data.new === "true") {
            console.log("inside if", this.props.history);
            this.props.history.push('/main');
          }
        })
      }
    )
  }

  render () {
    return (
      <div className="container">
      <img className="logo" src="https://upload.wikimedia.org/wikipedia/fr/thumb/c/c8/Twitter_Bird.svg/944px-Twitter_Bird.svg.png" alt="twitterlogo" />
      <header><b>Log in to Miniter</b></header>
      <form>
          <Input 
            type="text" 
            placeholder="Enter ID" 
            className="enterId" 
            name="userId"
            autoComplete="username" 
            changeInput={this.handleChange}
          />

          <Input 
            type="password" 
            name="password"
            placeholder="Password" 
            className="enterPassword" 
            autocomplete="current-password"
            changeInput={this.handleChange}
          />

          <Button 
            className={` ${this.state.checked ? 'blue-btn signup-btn' : 'signup-btn'}` }
            btnClicked={this.loginToMiniter}
            innerHTML="Log in"
          />
      </form>
        <a href="./signup">Sign Up for Miniter</a>
    </div>

    );
  }
}

export default withRouter(Login);
