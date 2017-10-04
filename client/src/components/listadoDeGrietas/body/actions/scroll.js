export function SCROLL(scroll) {

   return function(dispatch,getState){

        dispatch({type:'SCROLL', payload:scroll})
        localStorage.setItem('reduxState',JSON.stringify(getState()))
           
   }
 }