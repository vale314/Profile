const filtersState ={
    "gravedad":"",
        "tipoGrieta":"",
        "tipoHogar":"",
        "domicilio":"",
        "tamaño":"",
        "revisada": null
}

export default function reducer(state={
    filters:{
        "gravedad":"",
        "tipoGrieta":'',
        "tipoHogar":"",
        "domicilio":"",
        "tamaño":"",
        "revisada": null
    }

  }, action) {

    switch (action.type) {
      case "SAVE_FILTERS": {
        return {...state, filters: action.filters}
      }
      case "DROP_FILTERS" : {
        return {...state, filters:filtersState}
      }
      default:{
      return state
      }
    }
}
