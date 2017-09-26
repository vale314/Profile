import React from 'react';

import Images from '../../body/index.jsx'
import ListadoDeGrietas from '../../../listadoDeGrietas/body/index.jsx'
import Login from '../../../login/body/index.jsx'

import { Switch, Route, Miss} from 'react-router-dom'

const CardExampleExpandable = () => (
  <div>
    <Switch>
      <Route path='/' exact component={Images} />
      <Route path='/listado' extact component={ListadoDeGrietas} />
      <Route path='/login' extact component={Login} />
    </Switch>
  </div>

)

export default CardExampleExpandable;
