import React from 'react';
import { Switch, Route, Miss} from 'react-router-dom'

import Base from './components/base/index.jsx'

const Main = () => (
    
        <Switch>
          <Route path ='/' component={Base}/>

        </Switch>
    
    )


 export default Main;   