import React from 'react'
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';


const MenuComponent=({
    handleClick,
    open,
    handleClickRoute,
    authenticated
})=>(
    <Drawer
    type="temporary"
    open={open}
  >
    
    <List>
      {
        authenticated ?
        <div>
          <ListItem disableGutters={true} style={{display: 'block', margin:'0 auto', textAlign:'-webkit-center'}} >
                <Avatar size='100'
                  alt="Avatar" src="https://pbs.twimg.com/profile_images/425000350202867713/omeMN2VM.jpeg" />
          </ListItem>
          <ListItemText style={{textAlign:'center'}} primary="Yessica"/>
         </div> 
        : 
        <div style={{textAlign:'center', marginTop:'25%', marginBottom:'25%'}}> 
          <Button raised color="primary" onClick={()=>handleClickRoute('/login')} >
            Login
          </Button>
        </div>
      
      } 


      
      <Divider light style={{marginBottom:'50px'}}/>
      
      <ListItem button component="listado" style={{textAlign:'center'}} onClick={()=>handleClickRoute("/listado")}>
          <ListItemText primary="Listado de grietas"  />
      </ListItem>
      <ListItem button component="publica" style={{textAlign:'center'}} onClick={()=>handleClickRoute("/publica")}>
        <ListItemText primary="Publica Tu Grieta"  />
      </ListItem>
      <ListItem button  component="revisa" style={{textAlign:'center'}} onClick={()=>handleClickRoute("/revisa")}>
        <ListItemText primary="Revisa Grietas"   />
      </ListItem>
      <ListItem button  component="acerca" style={{textAlign:'center'}} onClick={()=>handleClickRoute("/acerca")}>
        <ListItemText primary="Acerca"  />
      </ListItem>
      <Button raised style={{margin:'15px', marginTop:'50px'}} onClick={handleClick}>
      Cerrar Menu
    </Button>
    </List>


    
  </Drawer>
)


export default MenuComponent;