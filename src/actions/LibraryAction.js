import {followLibrary} from "./FollowActions"
import {history} from "../history"
import url from "./url"
export {getLibraryPages,getLibrary,updateLibrary,startLibrary,addBookToLibrary,getAllLibraries,deleteBookLibrary,getBooksOfLibrary,getBookLibraries,getUserLibraries}
const path1= "https://elegant-croissant-40634.herokuapp.com"
const path2 = "http://localhost:3000/"

const libraryPath = `${url}/libraries`
const userPath = `${url}/users`
const bookLibPath = `${url}/book_libraries`
const getBookLibraries=()=>{

    return(dispatch)=>{fetch(bookLibPath).then(res=>res.json()).then(obj=>{
  
        let books = obj.data
        dispatch(allBookLibraries(books))
        return books
    })}
}

function startLibrary(lib){
 let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        'Accept': 'application/json'
          },
          body: JSON.stringify({
              name: lib.name,
              privacy: lib.privacy,
              userId: localStorage.getItem("currentUser"),
              intro: lib.intro
          })}
      return(dispatch)=>{fetch(libraryPath,config).then(res=>res.json()).then(obj=>{  
          debugger
        let lib= obj.data
        dispatch(followLibrary(lib.id))
        //   history.push("/libraries")
        history.push(`/libraries/${lib.id}`)
          dispatch(getUserLibraries(localStorage.getItem("currentUser")))  
          
      }).catch(err=>alert(err))}
    
}
function getLibrary(id){
    return(dispatch)=>{fetch(libraryPath+`/${id}`).then(res=>res.json()).then(obj=>{
   
        let library = obj.data.attributes
        dispatch(libraryInView(library))
    })}
}
function getAllLibraries(){

    return(dispatch)=>(fetch(libraryPath).then(res=>res.json()).then(obj=>{
        let libraries = obj.data
        dispatch(allLibraries(libraries))
    }))
}
function getUserLibraries(hash){

    return(dispatch)=>{
        fetch(userPath+`/${hash.id}/libraries`).then(res=>res.json()).then(obj=>{
           
            let libraries =obj.data
            dispatch(librariesInView(libraries))
        })
    }}


function addBookToLibrary({bookId,libraryId}){

        let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        'Accept': 'application/json'
          },
          body: JSON.stringify({
              bookId: bookId,
              libraryId: libraryId
          })}
         return(dispatch)=>{ fetch(bookLibPath,config).then(res=>res.json()).then(obj=>{
              dispatch(getLibraryPages(libraryId))
              dispatch(getBooksOfLibrary(libraryId))
            
          }).catch(err=>alert(err))}
}
function updateLibrary({id,intro,name}){

     let config = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        'Accept': 'application/json'
          },
          body: JSON.stringify({
              intro: intro,
              name: name
            
          })}   
    return(dispatch)=>{fetch(libraryPath+`/${id}/update`,config).then(res=>res.json()).then(obj=>{
debugger
        dispatch(getLibrary(id))
    })}
}
function deleteBookLibrary({bookId,libraryId}){
 let config = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        'Accept': 'application/json'
          },
          body: JSON.stringify({
              bookId,
              libraryId
            
          })}   
    return(dispatch)=>{
        fetch(bookLibPath+"/delete",config).then(res=>res.json()).then(obj=>{
            debugger
            dispatch(getBooksOfLibrary(libraryId))
        }).catch(err=>alert(err))
    }
}
function getBooksOfLibrary(id){


    return(dispatch)=>{fetch(libraryPath+`/${id}/books`).then(res=>res.json()).then(obj=>{
        let books = obj.data
        dispatch(booksInView(books))
    })}

}
function getLibraryPages(id){


    return(dispatch)=>{fetch(libraryPath+`/${id}/pages`).then(res=>res.json()).then(obj=>{
  
        let pages = obj.data
        dispatch(pagesInView(pages))

    })}
}
function pagesInView(pages){return{type: "PAGES_IN_VIEW",pages}}
function booksInView(books){return{type:"BOOKS_IN_VIEW",books}}
function allLibraries(libraries){return{type:"ALL_LIBRARIES",libraries}}
function librariesInView(libraries){return{type:"LIBRARIES_IN_VIEW",libraries}}
function libraryInView(library){return{type:"LIBRARY_IN_VIEW",library}}
function allBookLibraries(books){return{type:"ALL_BOOK_LIBRARIES",books}}
