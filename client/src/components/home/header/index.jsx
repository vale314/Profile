import React from 'react'
import HeaderComponent from './component.jsx'
import {connect} from 'react-redux'
import {OPEN} from '../../actions/open.js'
import {ROUTE} from '../../actions/routes'

@connect((store)=>{
    return{
        open:store.home.open
    }
})

class Header extends React.Component {
    constructor(props){
        super(props)
        this.handleClick =this.handleClick.bind(this);
        this.handleClickRoute = this.handleClickRoute.bind(this);

    }

    componentWillMount(e){
        
    }

    handleClick(e){
        this.props.dispatch(OPEN())
    }

    handleClickRoute(e){
        this.props.dispatch(ROUTE(e,this.props))
    }
    


    render(){
        return(
            <HeaderComponent handleClick={this.handleClick} open={this.props.open} handleClickRoute={this.handleClickRoute}/>
        )
    }
}

export default Header;