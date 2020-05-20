import {history} from "../history"
import {push} from 'react-router-redux'
import store from '../index'
const userPath = "http://localhost:3000/users"


function useUserActions(){
    return {signUp: (user)=>signUp(user),
            logIn: (user)=>LOG_IN(user)}
}
function SIGN_UP_START(){
    return {
    type: "SIGN_UP_START"}
}

function signUp(user) { 
   
    let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        'Accept': 'application/json'
          },
          body: JSON.stringify({
              name: user.name,
              username: user.username,
              password: user.password  
          })}
         
        return(dispatch)=>{
            dispatch(SIGN_UP_START())
            fetch(userPath,config).then(res => res.json())
            .then(user =>{
                dispatch({ type: 'SIGN_UP', user})
                history.push(`/users/${user.id}`)
                localStorage.setItem("currentUser",user.id);     
            }
                 
                 ).catch(err => {
                    
                    console.error(err)
                  })}
          
    
}


function getUsers(){
    
    return ((dispatch)=>{
        dispatch({type: "GET_USERS_START"})
    fetch(userPath).then(res => res.json()).then(obj=>{
       
        let users = obj.data
        dispatch({type: "GET_USERS", users})
    })})
}
function LOG_IN_START(){
    return{
        type: "LOG_IN_START"
    }
}
const LOG_IN = (user)=>{

    let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify({
                username: user.username,
                password: user.password  
            })}
    return ((dispatch)=>{
        dispatch(LOG_IN_START);
       
        fetch("http://localhost:3000/login",config).then(res=>res.json()).then(user =>{
            debugger
        localStorage.setItem("currentUser",user.id)
        store.dispatch(push(`/users/${user.id}`))
        dispatch({type: "LOG_IN",user})
        
        }
        ).catch(error=>window.alert(error))
    })
}
const SET_CURRENT_USER=()=>{
    let id = localStorage.getItem("currentUser")

  return ((dispatch)=>{
      dispatch({type:"START_SET_CURRENT_USER"})
      fetch(userPath+"/"+id).then(res=>res.json()).then(user=>{
        dispatch({ type: "SET_CURRENT_USER",user})})
    
        
    })
}
const END_CURRENT_USER=()=>{
return(dispatch)=>{
    dispatch({type:"END_CURRENT_USER"})}
}
export {LOG_IN,signUp, SET_CURRENT_USER, getUsers,END_CURRENT_USER, useUserActions}

