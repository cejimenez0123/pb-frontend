
import {history} from "../history"
const libraryPath = "http://localhost:3000/libraries"
const userPath = "http://localhost:3000/users"
const bookLibPath = "http://localhost:3000/book_libraries"


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
function getUserLibraries(id){
    return(dispatch)=>{
        fetch(userPath+`/${id}/libraries`).then(res=>res.json()).then(obj=>{
            let libraries =obj.data
            dispatch(librariesInView(libraries))
        })
    }

}
function deleteBookLibrary(bookLib){
    debugger
    const config = {    
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        body: JSON.stringify({
            id: bookLib.id
        })}
    return (dispatch)=>{fetch(bookLibPath+`/${bookLib.id}`,config).then(res=>res.json()).then(obj=>{
        dispatch(getBookLibraries())
    }).catch(err=>console.log(err))}

}

function getBookLibraries(){

    return(dispatch)=>{fetch(bookLibPath).then(res=>res.json()).then(obj=>{
  
        let books = obj.data
        dispatch(allBookLibraries(books))
        return books
    })}
}
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
          fetch(bookLibPath,config).then(res=>res.json()).then(obj=>{
              debugger
              window.alert("success")

          }).catch(err=>alert(err))
}
function getBooksOfLibrary(id){


    return(dispatch)=>{fetch(libraryPath+`/${id}/books`).then(res=>res.json()).then(obj=>{
        let books = obj.data
        dispatch(booksInView(books))
    })}

}
function booksInView(books){return{type:"BOOKS_IN_VIEW",books}}
function allLibraries(libraries){return{type:"ALL_LIBRARIES",libraries}}
function librariesInView(libraries){return{type:"LIBRARIES_IN_VIEW",libraries}}
function libraryInView(library){return{type:"LIBRARY_IN_VIEW",library}}
function allBookLibraries(books){return{type:"ALL_BOOK_LIBRARIES",books}}
export {deleteBookLibrary,startLibrary,getUserLibraries,getAllLibraries,addBookToLibrary,getLibrary,getBooksOfLibrary,getBookLibraries}