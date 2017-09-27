import React from 'react'
import MenuComponent from './component.jsx'
import {connect} from 'react-redux'
import {OPEN} from '../../actions/open'
import {ROUTE} from '../../actions/routes.js'
@connect((store)=>{
    return{
        open:store.home.open,
        authenticated:store.authenticated.authenticate
    }
})

class Menu extends React.Component {
    constructor(props){
        super(props)
        this.handleClick =this.handleClick.bind(this);
        this.handleClickRoute = this.handleClickRoute.bind(this);
    }
    componentWillMount(){
        console.log(this.props.authenticated)
    }
    

    handleClick(e){
        this.props.dispatch(OPEN())
    }

    handleClickRoute(e){
        this.props.dispatch(ROUTE(e,this.props))
        if(e == `/login`)
            this.props.dispatch(OPEN())
    }

    


    render(){
        return(
            <MenuComponent handleClick={this.handleClick} open={this.props.open} handleClickRoute={this.handleClickRoute} 
                authenticated={this.props.authenticated}
            />
        )
    }
}

export default Menu;