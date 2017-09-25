import React from 'react';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';


const HeaderComponent = ({
    open,
    handleClick
}) => (
    <div >


            <Toolbar disableGutters={open}>
              <IconButton
                color="contrast"
                aria-label="open drawer"
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit" noWrap>
                Persistent drawer
              </Typography>
            </Toolbar>
           
      </div>  
);

export default HeaderComponent;
