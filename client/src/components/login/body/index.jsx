import React from 'react';
import Component from './component.jsx'
import {connect} from 'react-redux'
import {OPEN} from '../../actions/open'
import {AUTHENTICATED} from '../../actions/auth'
import {ROUTE} from '../../actions/routes'
@connect((store)=>{
    return{
        authenticated:store.authenticated.authenticate
    }
})
class Login extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    componentWillMount(){
        if(this.props.authenticated)
            return this.props.dispatch(ROUTE('/',this.props))
    }

    handleClick(){
        this.props.dispatch(AUTHENTICATED(this.props))
    }
  

    render(){
        return(
            <Component handleClick={this.handleClick}/>
        )
    }
    
}

export default Login