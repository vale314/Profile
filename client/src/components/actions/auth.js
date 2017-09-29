import {OPEN} from './open'
import {ROUTE} from './routes'


export function DEAUTHENTICATED(route,props) {
    
        return function(dispatch,getState){
               dispatch({type:'DEAUTHENTICATE'})
               dispatch(ROUTE(route,props))
               localStorage.setItem('reduxState',JSON.stringify(getState()))
               
       }
     }


export function AUTHENTICATED(props){

        return function(dispatch,getState){
                dispatch({type:'AUTHENTICATED'})
                
                dispatch(ROUTE('/',props))
                localStorage.setItem('reduxState',JSON.stringify(getState()))
        }
}