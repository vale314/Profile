import React from 'react'
import Component from './body.jsx'
import Header from './header.jsx'
import {connect} from 'react-redux'
import {SCROLL} from './actions/scroll.js'

import {FILTERS} from './actions/filters.js'

//(ajax) GET
import {getGrietas} from './actions/get'

@connect((store)=>{
  return{
    scroll: store.scroll.scroll,
    filters: store.filters.filters
  }
})

class Listado extends React.Component {
    constructor(props){
        super(props)
        this.state={
            items:[],
            filters:{
                gravedad: '',
                tipoGrieta:'',
                tipoHogar:'',
                domicilio:'',
                tamaño:''
            }

        }
        this.handleChange = this.handleChange.bind(this)
        this.busqueda = this.busqueda.bind(this)
        this.scroll = this.scroll.bind(this)
    }

    scroll(e){
      this.props.dispatch(SCROLL(e.srcElement.body.scrollTop))
    }

    componentWillMount(){
        this.setState({
          filters:this.props.filters
        },function(){
          getGrietas().then((array)=>{
            if(array[0] == 200){
              this.setState({
                items:array[1]
                },()=>{
                this.busqueda()  
                //promise
                document.documentElement.scrollTop = this.props.scroll
                window.addEventListener('scroll',this.scroll)
                
                })
            }
            else {
              this.setState({
                items:[]
                })
            }
          })
                
        }
      )
      
    }


    handleChange(e, name){
        var state = this.state.filters
        const value = e.target.value
        state[name] = value
        this.setState({
            state
        })
        this.props.dispatch(FILTERS(state))
        
    }

    busqueda(){
       const items = this.state.items
       const filters = this.state.filters
       var check = false;
       var busqueda = []
       items.map((e)=>{
        
        check = false
        
        if((filters.gravedad == e.filters.gravedad || filters.gravedad == '') &&
            (filters.domicilio == e.filters.domicilio || filters.domicilio == '') &&
             (filters.tamaño == e.filters.tamaño || filters.tamaño == '') &&
              (filters.tipoGrieta == e.filters.tipoGrieta || filters.tipoGrieta == '') &&
               (filters.tipoHogar == e.filters.tipoHogar || filters.tipoHogar == '') 
            ){
                check = true
            }  
           
           if(JSON.stringify(e.filters) == JSON.stringify(filters) || check ){
               busqueda.push(e)
            }
            



       })

       this.setState({
           items:busqueda
       })
    }

    render(){
        return(
            <div>
                <Header />
                <Component items={this.state.items} 
                            handleChange={this.handleChange}
                            filters={this.state.filters}
                            busqueda={this.busqueda}
                />
            </div>    
        )
    }
}

export default Listado;