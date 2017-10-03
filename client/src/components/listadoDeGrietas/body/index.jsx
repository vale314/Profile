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
                    "gravedad":"baja",
                    "tipoGrieta":'ambas',
                    "tipoHogar":"casa",
                    "domicilio":"xxxxx",
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
                gravedad: 10,
                tipoGrieta:'',
                tipoHogar:'',
                domicilio:'',
            }

        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentWillMount(){
        console.log('Valentine')

    }


    handleChange(e, name){
        const state = this.state.filters
        const value = e.target.value
        console.log(state)
        console.log(value)
        console.log(name)
    }

    render(){
        return(
            <div>
                <Header />
                <Component items={this.state.items} 
                            handleChange={this.handleChange}
                            filters={this.state.filters}
                />
            </div>    
        )
    }
}

export default Listado;