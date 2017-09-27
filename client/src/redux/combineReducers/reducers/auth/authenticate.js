export default function reducer(state={
    authenticate:false
  }, action) {

    switch (action.type) {
      case "DEAUTHENTICATE": {
        return {...state, authenticate: false}
      }
      case "AUTHENTICATED" : {
        return {...state, authenticate:true}
      }
      default:{
      return state
      }
    }
}
