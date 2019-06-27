import React, { Component, Fragment } from 'react';
import UserInfo from '../../Component/InnerBoxes/LeftSide/UserInfo';
import ShowTweets from '../../Component/InnerBoxes/RightSide/ShowTweets';
import './main.css';
import { withRouter } from 'react-router-dom';

class MainPage extends Component{
  render () {
    return (
      <Fragment>
        <UserInfo/>
        <ShowTweets />
      </Fragment>
    );
  }
}

export default withRouter(MainPage);
