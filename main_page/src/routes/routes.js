import React, {Fragment} from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from  'react-router-dom';

import Login from '../Pages/login/Login';
import Signup from '../Pages/signup/SignUp';
import MainPage from '../Pages/mainpage/App';

class Routes extends React.Component {
  render () {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/main" component={MainPage} />
            </Switch>
        </Router>
    );
  }
}

export default Routes;