import React from 'react'
import Base from './base/index.jsx'

class Home extends React.Component {
    constructor(props){
        super(props)
    }

    componentWillMount(){
        document.body.className = 'Main'
    }
    render(){
        return(
            <Base/>
        )
    }
}

export default Home;