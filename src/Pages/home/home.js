import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css'


class Home extends Component{
  render () {
    return (
      <div>
          <Link to="/login" className="LinkText">로그인</Link>
          <Link to="/signup" className="LinkText">회원가입</Link>
          <Link to="/main" className="LinkText">트위터</Link>
      </div>
    );
  }
}

export default Home;
