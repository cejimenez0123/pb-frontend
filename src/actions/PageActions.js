import {history} from "../history"

import {push } from 'react-router-redux'
import store from '../index'

const pageUrl = "http://localhost:3000/pages"
const userPath = "http://localhost:3000/users"
function usePageActions(){
  return{myPages: ()=>myPages(),
getPageById:(id)=>getPageById(id)
  }
}
const updatePage = (text,title) => {
 
    let id = localStorage.getItem("pageLink")
    const config = {    
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          },
          body: JSON.stringify({
              id: id,
            text: text,
            title: title
          })}
     fetch(pageUrl+"/"+id,config).then(res => res.json()).then(obj=>{
         return((dispatch)=>{dispatch({type: "UPDATE_PAGE",obj})})
         
     })
}
const startPage =(title)=>{
  
  let config = {    
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        userId: localStorage.getItem("currentUser")
      })}
   
      return(dispatch)=>{
        dispatch({type:"START_SAVE_PAGE"})
        fetch(pageUrl,config).then(res=>res.json()).then(page=>{
       debugger
       page = page.data.attributes
       console.log("pagex",page)
       debugger
       history.push(`/pages/${page.id}/edit`)
          dispatch({type: "SAVE_PAGE",page})
        
        
      }).catch(error=>{history.push(window.location.pathname)})}

}
const savePage = (page)=>{
 debugger
  let config = {    
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      },
      body: JSON.stringify({
        id: page.id,
        title: page.title,
        data: page.data
      })}
      return(dispatch)=>{fetch(pageUrl+"/"+page.id,config).then(res=>res.json()).then(
        obj=>{
       debugger
          let page=obj.data.attributes
          localStorage.setItem("currentPage",page.id)
          dispatch({type:"SAVE_PAGE",page})
        }
      )}
}
const getAllPages = ()=>{
  return(dispatch)=>{fetch(pageUrl).then(res=>res.json()).then(
    obj=>{
 
      let pages = obj.data
      dispatch({type: "GET_ALL_PAGES", pages})
    }
  )}
}
const deletePage=(id)=>{

  const config = {    
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        body: JSON.stringify({
            id: id
        })}
  fetch(pageUrl+"/"+id,config).then(res => {
      console.log(res)
      res.json()}).then(obj=>{
    
       history.push(`/users/${localStorage.getItem("currentUser")}`)
  }).catch(err=>
      {debugger
          window.location = (`/users/${localStorage.getItem("currentUser")}`)
      console.log(err)
      
  })
}
function getPage(){
  let id = window.location.pathname.split("/")[2]
  debugger
  return((dispatch)=>{fetch(`/pages/${id}`).then(res=>res.json()).then(obj=>{
     debugger
   let page = obj.data;
   dispatch({type: "GET_PAGE",page})}
 )})
}

function getPageById(id){
  return(dispatch)=>{ fetch(`/pages/${id}`,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }}).then(res=>res.json()).then(obj=>{
       debugger
     let page = obj.data
      dispatch({type: "GET_PAGE",page})
    })
  }
}
function myPages(){
  let id = localStorage.getItem("currentUser")
  return((dispatch)=>{
      fetch(userPath+"/"+id+"/pages").then(res => res.json()).then(
          obj => {
            debugger
              let pages = Array.from(obj.data)
              dispatch({type: "GET_MY_PAGES",pages})}
      )
  })
  
}


export {updatePage,savePage,getAllPages,startPage,myPages, getPage,getPageById,usePageActions}