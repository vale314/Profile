import React from 'react';
import { Header, Segment} from 'semantic-ui-react'
import FacebookLogin from 'react-facebook-login';



const responseFacebook = (response) => {
    console.log(response);
  }

const HeaderComponent = ({
    handleClick
}) => (
    <div >
        <Segment style={{marginTop:'50px', textAlign:'center'}}>
        <Header as='h2' textAlign='center'>
            Login
        </Header>
        <FacebookLogin
            appId="174456389769995"
            autoLoad={true}
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="my-facebook-button-class"
            icon="fa-facebook"
            onClick={handleClick}
        />
      </Segment>
    </div>  
);

export default HeaderComponent;
