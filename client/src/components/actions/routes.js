import {OPEN} from './open'

export function ROUTE(route,props) {

   return function(dispatch,getState){

           props.history.replace(route)
           if(route == `/`  || route == `/login` || route == `/signup`){
               return
           }
        dispatch(OPEN())
           
   }
 }
