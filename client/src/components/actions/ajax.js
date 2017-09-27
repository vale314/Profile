import {DEAUTHENTICATED} from './auth'

export function AJAX(props) {

   return function(dispatch,getState){

    const token = getState().authenticated.authenticate

    if(token){
        return
    }
   
    dispatch(DEAUTHENTICATED(props))
    localStorage.setItem('reduxState',JSON.stringify(getState()))
   
    }
 }
