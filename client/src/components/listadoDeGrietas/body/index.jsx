import React from 'react'
import Component from './body.jsx'
import Header from './header.jsx'



class Listado extends React.Component {
    constructor(props){
        super(props)
        this.state={
            items:[
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {}
            ]
        }
    }

    componentWillMount(){
        console.log('Valentine')

    }

    


    render(){
        return(
            <div>
                <Header />
                <Component items={this.state.items} />
            </div>    
        )
    }
}

export default Listado;