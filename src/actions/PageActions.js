import {history} from "../history"

import {push } from 'react-router-redux'
import store from '../index'
const path1= "https://elegant-croissant-40634.herokuapp.com"
const path2="http://localhost:3000"
const pageComPath=`${path2}/page_comments`
const pageUrl = `${path2}/pages`
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
const updatePage = ({id,data}) => {
 
    
    const config = {    
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          },
          body: JSON.stringify({
              id: id,
            data: data
          })}
     fetch(pageUrl+"/"+id,config).then(res => res.json()).then(obj=>{
       debugger
         return((dispatch)=>{dispatch({type: "UPDATE_PAGE",obj})})
         
     })
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
  return(dispatch)=>{fetch(bookPath+"/"+id+"/pages").then(res=>res.json()).then(obj=>{
  let pages=obj.data
  dispatch(pagesInView(pages))
  })}
}
const getDraftsOfBook=(id)=>{
  return(dispatch)=>{fetch(bookPath+"/"+id+"/drafts").then(res=>res.json()).then(obj=>{
  let pages=obj.data
  debugger
  dispatch(pagesInView(pages))
  })}
}
// const newPage=(page)=>{

//   let config = {    
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//       },
//       body: JSON.stringify({
//         userId: localStorage.getItem("currentUser"),
//         data: page.data,
//         bookId: page.bookId
//       })}
//     return(dispatch)=>{fetch(pageUrl+"/new",config).then(res=>res.json()).then(obj=>{
 
//       let page=obj.data.attributes
//           dispatch(currentPage(page))
//          dispatch(getAllPages())
         
//     })}
// }
const publishPage=(page)=>{
   let config = {    
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      },
      body: JSON.stringify({
        id: page.id,
        userId: localStorage.getItem("currentUser"),
        data: page.data,
        bookId: page.bookId,
        status: "published"
      })}
      return(dispatch)=>{fetch(pageUrl+"/publish",config).then(res=>res.json()).then(
        obj=>{
          let page=obj.data.attributes
          
         dispatch(getAllPages())
        }
      )}
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
        id: page.id,
        userId: localStorage.getItem("currentUser"),
        data: page.data,
        bookId: page.bookId,
        status: "draft"
      })}
      return(dispatch)=>{fetch(pageUrl,config).then(res=>res.json()).then(
        obj=>{
debugger
          let page=obj.data.attributes
          dispatch(currentPage(page))
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

       debugger
              let pages = obj.data
              
          pages = pages.sort((a,b)=>{
          return new Date(b.attributes.updated_at )-new Date(a.attributes.updated_at)
          })
       
              dispatch({type: "GET_MY_PAGES",pages})}
              
  
).catch(err=>alert(err))})}

function commentOnPage(page){

const config = {    
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        body: JSON.stringify({
            page_id: page.page_id,
            userId: localStorage.getItem("currentUser"),
            text: page.text
        })}
      return(dispatch)=>{fetch(pageUrl+`/${page.page_id}/comment`,config).then(res=>res.json()).then(obj=>{
debugger

      dispatch(getPageComments(obj.data.attributes.page_id))
        
      })}


}
function getPageComments(id){

  return(dispatch)=>{fetch(pageUrl+`/${id}/comments`).then(res=>res.json()).then(obj=>{
 
    const comments = obj
    dispatch(pageComments(comments))

  })}
}
function getPageCommentComments(id){
  return fetch(pageComPath+`/${id}`).then(res=>res.json()).then(obj=>{
    debugger
    return obj
  }
  )
}
function commentOnPageComment(page){
debugger
let config ={
  method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        body: JSON.stringify({
            pageId: page.page_id,
            userId: localStorage.getItem("currentUser"),
            text: page.text,
            parentId: page.parent_id
        })}
      
  return(dispatch)=>{fetch(pageUrl+`/${page.page_id}/comment_on_comment`,config).then(res=>res.json()).then(obj=>{
    dispatch(getPageComments(page.page_id))
  })}}


const pageComments =(comments)=>{return{type: "PAGE_COMMENTS",comments}}
const pagesInView = (pages)=>{return{ type: "PAGES_IN_VIEW",pages}}
const currentPage=(page)=>{return{type:"CURRENT_PAGE",page}}

export {getDraftsOfBook,getPageCommentComments,publishPage,getPageComments,commentOnPage,commentOnPageComment,updatePage,savePage,getAllPages,startPage,myPages, getPage,getPageById,usePageActions,share,getInbox,deletePage,getPagesOfBook}