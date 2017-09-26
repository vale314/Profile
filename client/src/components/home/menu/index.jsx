import React from 'react'
import MenuComponent from './component.jsx'
import {connect} from 'react-redux'
import {OPEN} from '../../actions/open'
import {ROUTE} from '../../actions/routes.js'
@connect((store)=>{
    return{
        open:store.home.open
    }
})

class Menu extends React.Component {
    constructor(props){
        super(props)
        this.handleClick =this.handleClick.bind(this);
        this.handleClickRoute = this.handleClickRoute.bind(this);
    }
    componentWillMount(){

    }
    

    handleClick(e){
        this.props.dispatch(OPEN())
    }

    handleClickRoute(e){
        this.props.dispatch(ROUTE(e,this.props))
    }

    


    render(){
        return(
            <MenuComponent handleClick={this.handleClick} open={this.props.open} handleClickRoute={this.handleClickRoute}/>
        )
    }
}

export default Menu;