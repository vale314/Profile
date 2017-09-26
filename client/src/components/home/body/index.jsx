import React from 'react'
import ImageComponent from './component.jsx'
import {connect} from 'react-redux'



class Images extends React.Component {
    constructor(props){
        super(props)
    }


    
    render(){
        return(
            <ImageComponent />
        )
    }
}

export default Images;