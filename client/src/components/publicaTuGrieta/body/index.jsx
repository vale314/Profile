import React from 'react'
import Component from './component'
import {connect} from 'react-redux'
import {AJAX} from '../../actions/ajax'


@connect((store)=>{
    return{

    }
})

class Publica extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.props.dispatch(AJAX('/login' ,this.props))
    }

    render(){
        return(<Component />)
    }
}



export default Publica;