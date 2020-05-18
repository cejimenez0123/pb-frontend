import {history} from "../history"
const pageUrl = "http://localhost:3000/pages"
const userPath = "http://localhost:3000/users"
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
  debugger
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
      return(dispatch)=>{fetch(pageUrl,config).then(res=>res.json()).then(obj=>{
       
        let page = obj.data
        debugger
        dispatch({type: "SAVE_PAGE",page})
        history.push(`/pages/${page.id}/edit`)
       

        
      })}

}
const savePage = (data)=>{
  
  let config = {    
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      },
      body: JSON.stringify({
        data: data
      })}
      return(dispatch)=>{fetch(pageUrl,config).then(res=>res.json()).then(
        obj=>{
          let page=obj.data
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
    
       window.location = (`/users/${localStorage.getItem("currentUser")}`)
  }).catch(err=>
      {debugger
          window.location = (`/users/${localStorage.getItem("currentUser")}`)
      console.log(err)
      
  })
}
function getPage(){
  let id= localStorage.getItem("currentPage")
 return(dispatch)=>{ fetch(`/pages/${id}`,{
  headers : { 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
   }}).then(res=>res.json()).then(obj=>{
   let page = obj.data
    dispatch({type: "GET_PAGE",page})
  })}
}
function myPages(){
  let id = localStorage.getItem("currentUser")
  return((dispatch)=>{
      fetch(userPath+"/"+id+"/pages").then(res => res.json()).then(
          obj => {
              let pages = obj.data
              dispatch({type: "GET_MY_PAGES",pages})}
      )
  })
  
}

export {updatePage,savePage,getAllPages,startPage, getPage}