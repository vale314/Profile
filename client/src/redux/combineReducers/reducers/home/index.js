export default function reducer(state={
    open:false
  }, action) {

    switch (action.type) {
      case "HANDLE_TAP_HOME": {
        return {...state, open: action.payload}
      }
      default:{
      return state
      }
    }
}
