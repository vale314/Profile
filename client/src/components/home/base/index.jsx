import React from 'react';

import { Switch, Route, Miss} from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import {Header} from 'semantic-ui-react'

  //dependencies
import Menu from '../menu/index.jsx'
import Headers from './routes/routesHeader.jsx'
import Bodys from './routes/routesBodys.jsx'
//routes


const CardExampleExpandable = ({}) => (
  <div >
    <Header>
    <AppBar position="static">
      <Route path='/' render={(props) => (
          <Menu {...props}  />
      )}/>
      <Headers />
    </AppBar>
    </Header>

    <Divider />
    <Bodys />
  </div>
);

export default CardExampleExpandable;
