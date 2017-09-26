import React from 'react';
import Component from './component.jsx'
import {ROUTE} from '../../actions/routes'
import {connect} from 'react-redux'

@connect((store)=>{
    return{
        
    }
})
class Login extends React.Component {
    constructor(props){
        super(props)
        this.handleClickRoute = this.handleClickRoute.bind(this)
    }

    handleClickRoute(e){
        this.props.dispatch(ROUTE(e,this.props))
    }

    render(){
        return(
            <Component handleClickRoute={this.handleClickRoute}/>
        )
    }
    
}

export default Login