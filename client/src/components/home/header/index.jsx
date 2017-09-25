import React from 'react'
import HeaderComponent from './component.jsx'
import {connect} from 'react-redux'
import {OPEN} from '../actions/open.js'

@connect((store)=>{
    return{
        open:store.home.open
    }
})

class Header extends React.Component {
    constructor(props){
        super(props)
        this.handleClick =this.handleClick.bind(this);

    }

    componentWillMount(e){
        
    }

    handleClick(e){
        this.props.dispatch(OPEN())
    }

    


    render(){
        return(
            <HeaderComponent handleClick={this.handleClick} open={this.props.open}/>
        )
    }
}

export default Header;