import React from 'react';

import Images from '../../home/body/index.jsx'
import ListadoDeGrietas from '../../listadoDeGrietas/body/index.jsx'
import Login from '../../login/body/index.jsx'
import Publica from '../../publicaTuGrieta/body/index.jsx'
import Revisa from '../../revisaGrietas/body/index.jsx'
import Acerca from '../../Acerca/body/index.jsx'
import { Switch, Route, Miss} from 'react-router-dom'

const CardExampleExpandable = () => (
  <div>
    <Switch>
      <Route path='/' exact component={Images} />
      <Route path='/listado' exact component={ListadoDeGrietas} />
      <Route path='/login' exact component={Login} />
      <Route path='/publica' exact component={Publica} />
      <Route path='/revisa' exact component={Revisa} />
      <Route path='/acerca' exact component={Acerca} />
    </Switch>
  </div>

)

export default CardExampleExpandable;
