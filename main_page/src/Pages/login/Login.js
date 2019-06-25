import React, {Fragment} from 'react';
import './Login.css';
import {Input, Button} from '../../component/input';
import { Link } from 'react-router-dom';


class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userId : "",
      password : "",
    }
  }

  handleChange = (e) => {
    this.setState({[e.name] : e.value})
    if(this.state.userId !== "" && this.state.password !== "") {
      const elLogInBtn = document.getElementsByClassName('login-btn')[0];
      elLogInBtn.style.backgroundColor = "#1aabff"
    }
  }
  

  render () {
    return (
      <div>
        <span>
            <Link to="/signup">회원가입</Link>
        </span>
      <div className="container">
      <img className="logo" src="https://upload.wikimedia.org/wikipedia/fr/thumb/c/c8/Twitter_Bird.svg/944px-Twitter_Bird.svg.png" />
      <header><b>Log in to Miniter</b></header>
      <form>
          <Input 
            type="text" 
            placeholder="Enter ID" 
            className="enterId" 
            name="userId"
            autocomplete="username" 
            changeBtnColor={this.handleChange}
          />

          <Input 
            type="password" 
            name="password"
            placeholder="Password" 
            className="enterPassword" 
            autocomplete="current-password"
            changeBtnColor={this.handleChange}
          />

          <Button 
            className="login-btn" 
            innerHTML="Log in"
          />
      </form>
        <a href="./signup.html">Sign Up for Miniter</a>
    </div>
    </div>
    );
  }
}

export default Login;
