import {history} from "../history"

import {push } from 'react-router-redux'
import store from '../index'

const pageUrl = "http://localhost:3000/pages"
const bookPath = "http://localhost:3000/books"
const userPath = "http://localhost:3000/users"
const sharePath = "http://localhost:3000/shares"
function usePageActions(){
  return{myPages: ()=>myPages(),
getPageById:(id)=>getPageById(id),
savePage:(data)=>savePage(data),
getPagesOfBook: (id)=>getPagesOfBook(id)
  }
}
const updatePage = (text,title) => {
 debugger
    // let id = localStorage.getItem("pageLink")
    // const config = {    
    //     method: 'PATCH',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //       },
    //       body: JSON.stringify({
    //           id: id,
    //         text: text,
    //         title: title
    //       })}
    //  fetch(pageUrl+"/"+id,config).then(res => res.json()).then(obj=>{
    //      return((dispatch)=>{dispatch({type: "UPDATE_PAGE",obj})})
         
    //  })
}
const startPage =(title)=>{
  
  // let config = {    
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       userId: localStorage.getItem("currentUser")
  //       data: 
  //     })}
   
  //     return(dispatch)=>{
  //       dispatch({type:"START_SAVE_PAGE"})
  //       fetch(pageUrl,config).then(res=>res.json()).then(page=>{
  //      debugger
  //      page = page.data.attributes
  //      console.log("pagex",page)
  //      debugger
  //      history.push(`/pages/${page.id}/edit`)
  //         dispatch({type: "SAVE_PAGE",page})
        
        
  //     }).catch(error=>{history.push(window.location.pathname)})}

}
const getPagesOfBook=(id)=>{
  return(dispatch)=>{fetch(bookPath+"/"+id+"/pages").then(res=>res.json()).then(obj=>{debugger
  })}
}
const savePage = (page)=>{
 debugger
  let config = {    
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      },
      body: JSON.stringify({
        userId: localStorage.getItem("currentUser"),
        data: page.data,
        bookId: page.bookId
      })}
      return(dispatch)=>{fetch(pageUrl,config).then(res=>res.json()).then(
        obj=>{

          let page=obj.data.attributes
         dispatch(getAllPages())
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
const share=(id,pageId)=>{

  const config = {    
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      },
      body: JSON.stringify({
          id: id,
          contentId: pageId
      })}
      fetch(sharePath,config).then(res=>res.json()).then(obj=>{
    
      let data= obj.data.attributes
      
      if (obj.data.id === null && obj.data.type ==="share"){
        window.alert(`Already sent a cop${data.content.title} to ${data.user.name}`);
      }else if (obj.data.type ==="share"){
        window.alert(`Sent ${data.content.title} to ${data.user.name}`);
      }else{
        window.alert("error")
      }}).catch(er=>window.alert(er))

    }
const getInbox =()=>{
 
  return(dispatch)=>{
    fetch(userPath+"/"+localStorage.getItem("currentUser")+"/inbox").then(res=>res.json()).then(
      obj=>{
       
        let inbox = obj.data
        dispatch({type: "MY_INBOX", inbox})

      }
    )
  }
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

  return(dispatch)=>{fetch(pageUrl+`/${id}`).then(res=>res.json()).then(obj=>{
    debugger
   let page = obj.data.attributes;
   dispatch({type: "GET_PAGE",page})}
 )}
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
    
            
              let pages = Array.from(obj.data)
          pages = pages.sort((a,b)=>{
          return new Date(b.attributes.updated_at )-new Date(a.attributes.updated_at)
          })
       
              dispatch({type: "GET_MY_PAGES",pages})}
              
  
)})}


export {updatePage,savePage,getAllPages,startPage,myPages, getPage,getPageById,usePageActions,share,getInbox,deletePage,getPagesOfBook}