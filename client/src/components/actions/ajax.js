import {DEAUTHENTICATED} from './auth'

export function AJAX(route,props) {

   return function(dispatch,getState){

    const token = getState().authenticated.authenticate

    if(token){
        return
    }
   
    dispatch(DEAUTHENTICATED(route,props))
    localStorage.setItem('reduxState',JSON.stringify(getState()))
   
    }
 }
