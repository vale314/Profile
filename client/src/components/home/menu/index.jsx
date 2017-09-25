import React from 'react'
import MenuComponent from './component.jsx'
import {connect} from 'react-redux'
import {OPEN} from '../actions/open'

@connect((store)=>{
    return{
        open:store.home.open
    }
})

class Menu extends React.Component {
    constructor(props){
        super(props)
        this.handleClick =this.handleClick.bind(this);
    }
    componenetWillMount(){
        
    }
    

    handleClick(e){
        this.props.dispatch(OPEN())
    }

    


    render(){
        return(
            <MenuComponent handleClick={this.handleClick} open={this.props.open}/>
        )
    }
}

export default Menu;