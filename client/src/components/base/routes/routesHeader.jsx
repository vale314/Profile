import React from 'react';

import Home from '../../home/header/index.jsx'
import Login from '../../login/header/index.jsx'
import { Switch, Route, Miss} from 'react-router-dom'

const CardExampleExpandable = () => (
  <div>
    <Switch>
      <Route exact path='/login' component={Login} />
      <Route path='/' component={Home} />
    </Switch>
  </div>

)

export default CardExampleExpandable;
