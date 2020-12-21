import {history} from "../history"
import {getBook} from "./BookActions"
import {push } from 'react-router-redux'
import store from '../index'
const path1= "https://elegant-croissant-40634.herokuapp.com"
const path2="http://localhost:3000"
let url = path2
const pageComPath=`${url}/page_comments`
const pageUrl = `${url}/pages`
const bookPath = `${url}/books`
const userPath = `${url}/users`
const sharePath = `${url}/shares`
const phrasePath = `${url}/phrases`
const likePath = `${url}/likes`
function usePageActions(){
  return{myPages: ()=>myPages(),
getPagesById:(id)=>getPagesById(id),
savePage:(data)=>savePage(data),
getPagesOfBook: (id)=>getPagesOfBook(id)
  }
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
  
  debugger
  let pages=obj.data
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
      return(dispatch)=>{(fetch(pageUrl+"/publish",config).then(res=>res.json()).then(
        obj=>{
       
          let page=obj.data.attributes
          
          dispatch(getPagesOfBook(page.book.id))
          dispatch(getBook(page.book.id))
        }
      ))
      }
}
const updatePage=(page)=>{
 
  let config = {    
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      },
      body: JSON.stringify({
        id: page.id,
        userId: localStorage.getItem("currentUser"),
        data: page.data,
        bookId: page.bookId,
        status: page.status
      })}
      return(dispatch)=>{fetch(pageUrl+`/${page.id}/update`,config).then(res=>res.json()).then(
        obj=>{
          let page=obj.data.attributes
          window.alert("saved!!")
       
          if(window.location.pathname.includes("books") && window.location.pathname.includes("drafts")){
            dispatch(getDraftsOfBook(page.book.id ))
          }else{
            dispatch(getPagesOfBook(page.book.id))
         dispatch(getAllPages())}
        }
      ).catch(err=>window.alert(err))}
}
const savePage = (page)=>{

  let config = {    
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      },
      body: JSON.stringify({
        userId: localStorage.getItem("currentUser"),
        data: page.data,
        bookId: page.bookId,
        status: page.status
      })}
      return(dispatch)=>{fetch(pageUrl,config).then(res=>res.json()).then(
        obj=>{

          let page=obj.data.attributes
          
          dispatch(getPagesOfBook(page.book.id))
          dispatch(getBook(page.book.id))
         dispatch(getAllPages())
        }
      )}
}
const getAllPages = ()=>{
  return(dispatch)=>{fetch(pageUrl+"/xklmno/all").then(res=>res.json()).then(
    obj=>{
    
      let pages = obj.data
      dispatch({type: "GET_ALL_PAGES", pages})
    }
  )}
}
function uploadPic(formData){
  return (dispatch)=>{fetch(`http://localhost:3000/pic/upload`, {
      method: "POST",
      body: formData
    }).then(res=>res.json()).then(obj=>{
      debugger

    })}
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
const deletePage=(page)=>{

  const config = {    
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        body: JSON.stringify({
            id: page.id
        })}
  return(dispatch)=>fetch(pageUrl+"/"+page.id,config).then(res => {
      console.log(res)
      res.json()}).then(obj=>{
        dispatch(getDraftsOfBook(page.bookId))
      
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
function getPublicPages(pages){

  return(dispatch)=>{
    fetch(pageUrl+`/page_count/${pages}`).then(res=>res.json()).then(obj=>{

      let pages= obj.data
      dispatch(pagesInView(pages))
    })
  }
}
function getPagesById(id){
  return(dispatch)=>{ fetch(userPath+`/${id}/pages`,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }}).then(res=>res.json()).then(obj=>{ 
     let page = obj.data
      dispatch(pagesInView(page))
    })
  }
}
function myPages(){

  let id = localStorage.getItem("currentUser")
  return((dispatch)=>{
      fetch(userPath+"/"+id+"/pages").then(res => res.json()).then(
          obj => {

 
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


      dispatch(getPageComments(obj.data.attributes.page_id))
        
      })}


}
function getPagesComments(pages){

let query = ""
pages.forEach(page=>{
  query+=`${page}+`
})

  return(dispatch)=>{
    fetch(pageUrl+`/${query}/pages/comments`).then(res=>res.json()).then(obj=>{

      let comments= obj
      
      dispatch(pageComments(comments))
    })
    
}
}
function getPageComments(id){

  if (id.id){
    id=id.id
  }
  return(dispatch)=>{fetch(pageUrl+`/${id}/comments`).then(res=>res.json()).then(obj=>{
   debugger
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
  function searchPhrases(query){
    let str
   let split = query.split(" ")
   let join = split.join("%w%")
   debugger
    return(dispatch)=>{fetch(phrasePath+`/${join}/search`).then(res=>res.json()).then(obj=>{

    debugger
      let pages = obj.data
      dispatch(searchedForPages(pages))
    }).catch(err=>window.alert(err))}
  }
  
  
const searchedForPages=(pages)=>{return{type:"SEARCHED_FOR_PAGES",pages}}
const pagesOfUser=(pages)=>{return{type: "PAGES_OF_USER",pages}}
const pageComments =(comments)=>{return{type: "PAGE_COMMENTS",comments: comments}}
const pagesInView = (pages)=>{return{ type: "PAGES_IN_VIEW",pages}}
const currentPage=(page)=>{return{type:"CURRENT_PAGE",page}}

export {searchPhrases,getPublicPages,getPagesComments,getDraftsOfBook,getPageCommentComments,publishPage,getPageComments,commentOnPage,commentOnPageComment,updatePage,savePage,getAllPages,startPage,myPages, getPage,getPagesById,usePageActions,share,getInbox,deletePage,getPagesOfBook}