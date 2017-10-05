export function FILTERS(filters) {

   return function(dispatch,getState){

        dispatch({type:'SAVE_FILTERS', filters:filters})
        localStorage.setItem('reduxState',JSON.stringify(getState()))
           
   }
 }