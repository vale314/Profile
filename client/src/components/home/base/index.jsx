import React from 'react';

import { Switch, Route, Miss} from 'react-router-dom'
import AppBar from 'material-ui/AppBar';



  //dependencies
import Menu from '../menu/index.jsx'
import Header from '../header/index.jsx'
//routes


const CardExampleExpandable = ({}) => (
  <div >
    <AppBar>
      <Route path='/' render={(props) => (
          <Menu {...props}  />
      )}/>
      <Header />
    </AppBar>
  </div>
);

export default CardExampleExpandable;
