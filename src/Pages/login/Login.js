import React from 'react';
import './Login.css';
import {Input, Button} from '../../component/form/input';



class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userId : "",
      password : "",
      checked : false,
    }
  }

  handleChange = (e) => {
    this.setState(
      {[e.name] : e.value}, () => {
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
  

  render () {
    return (
        
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
            className={` ${this.state.checked ? 'blue-btn signup-btn' : 'signup-btn'}` }
            innerHTML="Log in"
          />
      </form>
        <a href="./signup.html">Sign Up for Miniter</a>
    </div>

    );
  }
}

export default Login;
