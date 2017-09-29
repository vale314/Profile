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
        this.state={
            title:'',
        }
        this.titleChangeFunction = this.titleChangeFunction.bind(this)
        
    }



    componentWillMount(){
        this.titleChangeFunction()
        
    }

    titleChangeFunction(){
        const mexico = 'TODOS SOMOS MEXICO'
        var cambio = mexico.split('')
        var index = 0
        const intervalTitle = setInterval(()=>{ 

            if(cambio[index] == null || cambio[index] == undefined){
                clearInterval(intervalTitle)
            }
            if(cambio[index] !== undefined){
                this.setState({
                    title: this.state.title.concat(cambio[index])
                })
            }                

            
            index++
        }, 300)

    }

    
    render(){
        return(
            <ImageComponent titleChange={this.state.title}/>
        )
    }
}

export default Images;