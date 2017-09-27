import React from 'react';
import Drawer from 'material-ui/Drawer';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Button from 'material-ui/Button';
import ButtonHome from './button.jsx'

const HeaderComponent = ({
    open,
    handleClick,
    handleClickRoute,
    authenticated,
    deauthenticated
}) => (
    <div >


            <Toolbar disableGutters={open}>
              <IconButton
                color="contrast"
                aria-label="open drawer"
                onClick={handleClick}
              >
              <MenuIcon  />
              </IconButton>
              
              <Typography style={{margin:'auto'}} type="title" color="inherit" noWrap onClick={()=>handleClickRoute(`/`)}>
                Revisa Mi Grieta
              </Typography>
            <ButtonHome handleClickRoute={handleClickRoute} authenticated={authenticated} deauthenticated={deauthenticated} />
            </Toolbar>
      </div>  
);

export default HeaderComponent;
