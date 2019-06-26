import React, { Component } from 'react';
import TwoBoxes from '../../component/box';
import './App.css';
import { withRouter } from 'react-router-dom';

class MainPage extends Component{
  render () {
    return (
      <TwoBoxes/>
    );
  }
}

export default withRouter(MainPage);
