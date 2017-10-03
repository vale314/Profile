import React from 'react'
import Component from './body.jsx'
import Header from './header.jsx'



class Listado extends React.Component {
    constructor(props){
        super(props)
        this.state={
            items:[
                {
                    "comentario": "La verdad Se Encuentra En Muy Mal",
                    "createdOn": "0 de mes año",
                    "diagonalesLosa": "true",
                    "diagonalesPiso": "false",
                    "filters":{
                        "gravedad":"Baja",
                        "tipoGrieta":'Ambas',
                        "tipoHogar":"Casa",
                        "domicilio":"xxxxx",
                        "tamaño":"Chica"
                    },
                    
                    "estadoDeObra": {
                      "desplomes": "true",
                      "desprendimiento": "true",
                      "golpeteo": "true",
                      "hundimientos": "true",
                      "mas20porciento": "true",
                      "pisosHuecos": "true",
                      "vibraciones": "true"
                    },
                    "files": [
                      "string"
                    ],
                    "geolocalizacion": {
                      "latitude": 50.55,
                      "longitude": 40.9
                    },
                    "id": 6546546546546546546,
                    "modifiedOn": "0 de mes año",
                    "paralelasPiso": "true",
                    "revisada": "true",
                    "revisiones": [
                      {
                        "comentarios": "esta muy mal",
                        "createdOn": "0 de mes año",
                        "diagonalesLosa": "true",
                        "diagonalesPiso": "true",
                        "modifiedOn": "0 de mes año",
                        "paralelasPiso": "true",
                        "peligroInminente": "true",
                        "revisadaPor": "Valentine"
                      }
                    ],
                    "tweet": "string",
                    "userId": "valentine"
                  },
                  {
                    "comentario": "La verdad Se Encuentra En Muy Mal",
                    "createdOn": "0 de mes año",
                    "diagonalesLosa": "true",
                    "diagonalesPiso": "false",
                    "filters":{
                        "gravedad":"Media",
                        "tipoGrieta":'Ambas',
                        "tipoHogar":"Edificio",
                        "domicilio":"yyyyy",
                        "tamaño":"Chica"
                    },
                    
                    "estadoDeObra": {
                      "desplomes": "true",
                      "desprendimiento": "true",
                      "golpeteo": "true",
                      "hundimientos": "true",
                      "mas20porciento": "true",
                      "pisosHuecos": "true",
                      "vibraciones": "true"
                    },
                    "files": [
                      "string"
                    ],
                    "geolocalizacion": {
                      "latitude": 50.55,
                      "longitude": 40.9
                    },
                    "id": 6546546546546546546,
                    "modifiedOn": "0 de mes año",
                    "paralelasPiso": "true",
                    "revisada": "true",
                    "revisiones": [
                      {
                        "comentarios": "esta muy mal",
                        "createdOn": "0 de mes año",
                        "diagonalesLosa": "true",
                        "diagonalesPiso": "true",
                        "modifiedOn": "0 de mes año",
                        "paralelasPiso": "true",
                        "peligroInminente": "true",
                        "revisadaPor": "Valentine"
                      }
                    ],
                    "tweet": "string",
                    "userId": "valentine"
                  },
                  {
                    "comentario": "La verdad Se Encuentra En Muy Mal",
                    "createdOn": "0 de mes año",
                    "diagonalesLosa": "true",
                    "diagonalesPiso": "false",
                    "filters":{
                        "gravedad":"Alta",
                        "tipoGrieta":'Interna',
                        "tipoHogar":"Casa",
                        "domicilio":"wwwww",
                        "tamaño":"Grande"
                    },
                    
                    "estadoDeObra": {
                      "desplomes": "true",
                      "desprendimiento": "true",
                      "golpeteo": "true",
                      "hundimientos": "true",
                      "mas20porciento": "true",
                      "pisosHuecos": "true",
                      "vibraciones": "true"
                    },
                    "files": [
                      "string"
                    ],
                    "geolocalizacion": {
                      "latitude": 50.55,
                      "longitude": 40.9
                    },
                    "id": 6546546546546546546,
                    "modifiedOn": "0 de mes año",
                    "paralelasPiso": "true",
                    "revisada": "true",
                    "revisiones": [
                      {
                        "comentarios": "esta muy mal",
                        "createdOn": "0 de mes año",
                        "diagonalesLosa": "true",
                        "diagonalesPiso": "true",
                        "modifiedOn": "0 de mes año",
                        "paralelasPiso": "true",
                        "peligroInminente": "true",
                        "revisadaPor": "Valentine"
                      }
                    ],
                    "tweet": "string",
                    "userId": "valentine"
                  },{
                    "comentario": "La verdad Se Encuentra En Muy Mal",
                    "createdOn": "0 de mes año",
                    "diagonalesLosa": "true",
                    "diagonalesPiso": "false",
                    "filters":{
                        "gravedad":"Alta",
                        "tipoGrieta":'Ambas',
                        "tipoHogar":"Terreno",
                        "domicilio":"aaaaa",
                        "tamaño":"Media"
                    },
                    
                    "estadoDeObra": {
                      "desplomes": "true",
                      "desprendimiento": "true",
                      "golpeteo": "true",
                      "hundimientos": "true",
                      "mas20porciento": "true",
                      "pisosHuecos": "true",
                      "vibraciones": "true"
                    },
                    "files": [
                      "string"
                    ],
                    "geolocalizacion": {
                      "latitude": 50.55,
                      "longitude": 40.9
                    },
                    "id": 6546546546546546546,
                    "modifiedOn": "0 de mes año",
                    "paralelasPiso": "true",
                    "revisada": "true",
                    "revisiones": [
                      {
                        "comentarios": "esta muy mal",
                        "createdOn": "0 de mes año",
                        "diagonalesLosa": "true",
                        "diagonalesPiso": "true",
                        "modifiedOn": "0 de mes año",
                        "paralelasPiso": "true",
                        "peligroInminente": "true",
                        "revisadaPor": "Valentine"
                      }
                    ],
                    "tweet": "string",
                    "userId": "valentine"
                  }
              
            ],
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
    }

    componentWillMount(){
        console.log('Valentine')

    }


    handleChange(e, name){
        var state = this.state.filters
        const value = e.target.value
        state[name] = value
        this.setState({
            state
        })
        
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