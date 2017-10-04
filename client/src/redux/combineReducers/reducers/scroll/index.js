export default function reducer(state={
    scroll:0
  }, action) {

    switch (action.type) {
      case "SCROLL": {
        return {...state, scroll: action.payload}
      }
      default:{
      return state
      }
    }
}
