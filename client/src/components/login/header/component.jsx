import React from 'react';
import Drawer from 'material-ui/Drawer';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Button from 'material-ui/Button';

const HeaderComponent = ({
    handleClickRoute
}) => (
    <div >
            <Toolbar>
                <div style={{textAlign:'center', margin:'auto'}}>  
                    <Typography type="title" color="inherit" noWrap onClick={()=>handleClickRoute(`/`)} >
                        Revisa Mi Grieta
                    </Typography>
                </div>
            </Toolbar>
      </div>  
);

export default HeaderComponent;
