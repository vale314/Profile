import React from 'react'
import Button from 'material-ui/Button';


const ButtonHome = ({
  handleClickRoute,
  authenticated,
  deauthenticated
})=>(
  <div>
  {
    authenticated ?
      <div style={{textAlign:'center'}}>
        <Button onClick={()=>deauthenticated()} raised color="primary" style={{marginleft:'5px', marginRight:'5px'}} >
           Sign Out
        </Button>
      </div>
      :
      <div style={{textAlign:'center'}}>
        <Button onClick={()=>handleClickRoute('/login')} raised color="primary" style={{marginleft:'5px', marginRight:'5px'}} >
            Login
        </Button>
      </div>
  }
 </div>
)
export default ButtonHome;
