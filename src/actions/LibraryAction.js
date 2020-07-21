
const libraryPath = "http://localhost:3000/libraries"
const userPath = "http://localhost:3000/users"
const bookLibPath = "http://localhost:3000/book_libraries"
function startLibrary(name){
 let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        'Accept': 'application/json'
          },
          body: JSON.stringify({
              name: name,
              userId: localStorage.getItem("currentUser")
          })}
      return(dispatch)=>{fetch(libraryPath,config).then(res=>res.json()).then(obj=>{  
          debugger
          dispatch(getUserLibraries(localStorage.getItem("currentUser")))  
          
      }).catch(err=>alert(err))}
    
}
function getLibrary(id){
    return(dispatch)=>{fetch(libraryPath+`/${id}`).then(res=>res.json()).then(obj=>{
        debugger
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

function getBookLibraries(){

    return(dispatch)=>{fetch(bookLibPath).then(res=>res.json()).then(obj=>{
        let books = obj.data
        dispatch(allBookLibraries(books))

    })}
}
function addBookToLibrary({bookId,libraryId}){
    debugger
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
          })
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
export {startLibrary,getUserLibraries,getAllLibraries,addBookToLibrary,getLibrary,getBooksOfLibrary}