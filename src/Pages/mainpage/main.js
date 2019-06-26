import React, { Component, Fragment } from 'react';
import UserInfo from '../../component/innerboxes/leftside/userInfo';
import ShowTweets from '../../component/innerboxes/rightside/showTweets';
import './main.css';
import { withRouter } from 'react-router-dom';

class MainPage extends Component{
  render () {
    return (
      <Fragment>
        <UserInfo />
        <ShowTweets />
      </Fragment>
    );
  }
}

export default withRouter(MainPage);
