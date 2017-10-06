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
        this.getGrietasList = this.getGrietasList.bind(this)
        this.onFind = this.onFind.bind(this)
        this.onClear = this.onClear.bind(this)
    }

    scroll(e){
      this.props.dispatch(SCROLL(e.srcElement.body.scrollTop))
    }



    getGrietasList(callback){
        
            getGrietas().then((array)=>{
                if(array[0] == 200){
                  this.setState({
                    items:array[1]
                    },()=>{
                        return callback(true)
                    })
                }
                else {
                  this.setState({
                    items:[]
                    }, ()=> {
                        return callback(false)
                    }
                
                )
                }
              })
        
        
    }

    componentWillMount(){


            
        
        this.setState({
          filters:this.props.filters
        },()=>{
            this.getGrietasList((boolean)=>{
                if(boolean){
                    this.busqueda()
                        window.scrollTo(0,this.props.scroll)
                        window.addEventListener('scroll',this.scroll)
                    
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

    busqueda(boolean = false,callback){

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

    onFind(boolean=false){
        if(boolean){
            this.getGrietasList((boolean)=>{
                if(true){
                    return this.busqueda()
                }
            })
        }else{
            this.onClear()
            this.getGrietasList((callback)=>{
                
            })
        }

    }

    onClear(){
        const filters = {
            gravedad: '',
            tipoGrieta:'',
            tipoHogar:'',
            domicilio:'',
            tamaño:''
        }
        this.setState({
            filters
        },()=>{
            this.props.dispatch(FILTERS(filters))
        })
    }


    render(){
        return(
            <div>
                <Header />
                <Component items={this.state.items} 
                            handleChange={this.handleChange}
                            filters={this.state.filters}
                            busqueda={this.onFind}
                />
            </div>    
        )
    }
}

export default Listado;