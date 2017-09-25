export function OPEN(lenguage) {

   return function(dispatch,getState){

           dispatch({type:'HANDLE_TAP_HOME',payload:!getState().home.open})

   }
 }
