import React from 'react';
import Component from './component.jsx'
import {connect} from 'react-redux'

@connect((store)=>{
    return{
        
    }
})
class Login extends React.Component {
    constructor(props){
        super(props)
        
    }

  

    render(){
        return(
            <Component />
        )
    }
    
}

export default Login