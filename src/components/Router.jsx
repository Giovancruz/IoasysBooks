import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from '../pages/LoginPage';

class Router extends Component {
  render() {
     return (
       <Switch>
         <Route exact path="/" component={LoginPage}></Route>
       </Switch>
     );
  }
}

export default Router;