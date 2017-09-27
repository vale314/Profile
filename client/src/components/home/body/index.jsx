import React from 'react'
import ImageComponent from './component.jsx'
import {connect} from 'react-redux'


@connect((store)=>{
    return({

    })
})

class Images extends React.Component {
    constructor(props){
        super(props)
    }



    componentWillMount(){

    }

    
    render(){
        return(
            <ImageComponent />
        )
    }
}

export default Images;