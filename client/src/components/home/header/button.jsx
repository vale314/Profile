import React from 'react'
import Button from 'material-ui/Button';


const ButtonHome = ({
  handleClickRoute
})=>(
    <div style={{textAlign:'center'}}>
      <Button onClick={()=>handleClickRoute('/login')} raised color="primary" style={{marginleft:'5px', marginRight:'5px'}} >
        Login
      </Button>
    </div>   
)
export default ButtonHome;
