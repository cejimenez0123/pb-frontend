import {history} from "../history"
import {push} from 'react-router-redux'
import store from '../index'
import {startBook,setCurrentBook} from "./BookActions"
const path1= "https://elegant-croissant-40634.herokuapp.com"
const path2=""
// http://127.0.0.1:3000
const userPath = `${path1}/users`
const followPath = `${path1}/follows`


function useUserActions(){
    return {signUp: (user)=>signUp(user),
            logIn: (user)=>LOG_IN(user)}
}
function SIGN_UP_START(){
    return {
    type: "SIGN_UP_START"}
}

function newUser(){
let user
  fetch(userPath+"/new").then(res=>res.json()).then(obj=>{
       debugger
     user = obj.data.attributes  
       localStorage.setItem("profile_photo",obj.data.attributes.photo)
})

return user }

function signUp(user,formData) { 
   debugger
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

        //  axios({method: "POST",url: userPath,data: {name: user.name,
        //       username: user.username,
        //       password: user.password,
        //       file: user.file[0] }}).then(res=>res.json()).then(user=>{
        //           debugger
        //       })
        return(dispatch)=>{
            dispatch(SIGN_UP_START())
            fetch(userPath,config).then(res => res.json())
            .then(user =>{
                
                user = user.data.attributes
                debugger
                localStorage.setItem("currentUser",user.id)
                localStorage.setItem("loggedIn",true)
                history.push(`/user/${user.id}`)
                dispatch(uploadProfilePic(formData))
                dispatch(startBook("My Book"))
               
                
                ;     
            }
                 
                 ).catch(err => {
                    
                    console.error(err)
                  })}
          
    
}



function LOG_IN_START(){
    return{
        type: "LOG_IN_START"
    }
}
const LOG_IN = (user)=>{

    const con = {
        method: 'POST',
        headers: {
            // 'ACCESS-CONTROL-ALLOW-ORIGIN': 'http://localhost:3000',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify({
                username: user.username,
                password: user.password  
            })}
    return ((dispatch)=>{
        dispatch(LOG_IN_START);
       
        fetch("/login",con).then(res=>res.json()).then(user =>{
          debugger
            user = user.data.attributes
        if(user!==null){
        localStorage.setItem("currentUser",user.id)
        localStorage.setItem("loggedIn",true)
        history.push(`/user/${user.id}`)
    
        // dispatch(setCurrentBook(user.home_book))
        dispatch({type: "LOG_IN",user})}
        
        }
        ).catch(error=>{
            window.history.back()
            window.alert("Username or Password Incorrect")})
    })
}
const SET_CURRENT_USER=()=>{
    let id = localStorage.getItem("currentUser")
    let path = window.location.pathname

    
  return ((dispatch)=>{
      dispatch({type:"START_SET_CURRENT_USER"})
      fetch(userPath+"/"+id).then(res=>res.json()).then(user=>{
  
          user = user.data.attributes
          
        dispatch({ type: "SET_CURRENT_USER",user})}).catch(err=>alert(err))
    
        
    })
}
const userPageStream=()=>{
     return(dispatch)=>{fetch(userPath+`/${localStorage.getItem("currentUser")}/page_stream`).then(res=>res.json().then(obj=>{
   
         let pages = obj.data
         dispatch(pagesInView(pages))
     }))}
}
const getUser = (id)=>{
 
    return(dispatch)=>{fetch(userPath+"/"+id).then(res=>res.json()).then(obj=>{
       
        let user = obj.data.attributes
        console.log(obj)
        dispatch(userInView(user))

    })}
}

const END_CURRENT_USER=()=>{
return(dispatch)=>{
    localStorage.setItem("currentUser","")
    localStorage.setItem("loggedIn",false)
    dispatch({type:"END_CURRENT_USER"})}
}
const shareWith=(user,content)=>{

    let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify({
                user_id: user,
                content_id: content 
            })}
    }
function getUsers(){
  return(dispatch)=>{  fetch(userPath).then(res=>res.json()).then(users=>{

      users=users.data
    dispatch({type: "GET_USERS",users})
    })}
}
function updateUser(user){
   
    let config = {  
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify({
                id: localStorage.getItem("currentUser"),
                username: user.username,
                name: user.name
            })}
    
   return(dispatch)=>{fetch(userPath+`/${localStorage.getItem("currentUser")}`,config).then(res=>res.json()).then(obj=>{
     
        dispatch(uploadProfilePic(user.formData))
    })}
    
}
function uploadProfilePic(formData){

    debugger
return(dispatch)=>{fetch(`http://localhost:3000/${localStorage.getItem("currentUser")}/upload`, {
      method: "PATCH",
      body: formData
    })
      .then(res => res.json())
      .then(data => {
          debugger
          let user = data.data.attributes
 dispatch({ type: 'LOG_IN', user})
       // do something with the returned data
      });
  };
  }




function userInView(user){return{type: "USER_IN_VIEW",user}}
const pagesInView = (pages)=>{return{ type: "PAGES_IN_VIEW",pages}}
export {uploadProfilePic,userPageStream,LOG_IN,signUp, getUser,SET_CURRENT_USER, getUsers,END_CURRENT_USER, useUserActions,updateUser}

