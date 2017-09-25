import React from 'react';
import ReactDom from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import {BrowserRouter as Router } from 'react-router-dom'

import routes from './routes.js'
import { Provider } from "react-redux"
import store from './redux/store.js'

const theme = createMuiTheme(
    //theme
);


import injectTapEventPlugin from 'react-tap-event-plugin';

ReactDom.render((
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <Router>
                {routes()}
            </Router>    
        </MuiThemeProvider>
    </Provider>
), document.getElementById('react-app'));
