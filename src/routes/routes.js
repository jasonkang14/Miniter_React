import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from  'react-router-dom';

import Home from '../Pages/home/home';
import Login from '../Pages/login/Login';
import SignUp from '../Pages/signup/SignUp';
import MainPage from '../Pages/mainpage/App';

class Routes extends React.Component {
  render () {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/main" component={MainPage} />
            </Switch>
        </Router>
    );
  }
}

export default Routes;