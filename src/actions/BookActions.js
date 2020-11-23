import {history} from "../history"
import url from "./url"
import {followBook } from "./FollowActions"
const path1= "https://elegant-croissant-40634.herokuapp.com"
const bookPath = `${url}/books`
const userPath = `${url}/users`
const accessBookPath=`${url}/access_books`

function useBookActions(){
    return{getBooksOfUser: id=>{getBooksOfUser(id)}}
}
function startBook(book,is_Home_Book="false"){
    debugger
    let config={   
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      },
      body: JSON.stringify({
          userId: localStorage.getItem("currentUser"),
          title: book.name,
          book: book.intro,
          privacy: book.privacy,
          isHomeBook: is_Home_Book
    })}
    return(dispatch)=>{fetch(bookPath,config).then(res=>res.json()).then(obj=>{
   
        let book
        if(obj.data.attributes){
        book = obj.data.attributes
        dispatch(followBook(book.id))
        history.push(`/books/${book.id}`)
        
       
    
    
    }})
}
}
function getAllBooks(){
    console.log("HITTT!!!")
    return(dispatch)=>{fetch(bookPath).then(res=>res.json()).then(obj=>{
     
    let books = obj.data
    dispatch(getallbooks(books))
    })}
}
function getBooksOfUser(id){
 
    console.log("hitt")
    return(dispatch)=>{fetch(userPath+"/"+id+"/books").then(res=>res.json()).then(obj=>{
      
       let book = obj.data
    dispatch(booksOfUser(book))
        

    })}
}
function getPublicBooksOfUser(id){
 
    console.log("hitt")
    return(dispatch)=>{fetch(userPath+"/"+id+"/books/public").then(res=>res.json()).then(obj=>{
      
       let book = obj.data
   
        dispatch(booksInView(book))
        

    })}
}
function updateBook({bookId,title,intro,privacy}){
    let config={   
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      },
      body: JSON.stringify({
          bookId: bookId,
          title: title,
          intro: intro,
          privacy: privacy
    })}
    return(dispatch)=>{fetch(bookPath+`/${bookId}/update`,config).then(res=>res.json()).then(obj=>{
        debugger
    alert("UPDATED!!")
    let book = obj.data.attributes
    dispatch(bookInView(book))
    }).catch(err=>window.alert(err))}
}

function getBook(id){
 
   return(dispatch)=>{ fetch(bookPath+"/"
    +id).then(res=>res.json()).then(obj=>{

        let book = obj.data.attributes
        dispatch(bookInView(book))
    })}
}
function accessBook({bookId,access,userId}){
    let config={   
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      },
      body: JSON.stringify({
          bookId: bookId,
          access:access,
          userId: userId
    })}
    return(dispatch)=>{fetch(accessBookPath,config).then(res=>res.json()).then(obj=>{

        dispatch(getBookAccessors(bookId))
    })}
}
function getBookAccessors(id){

    return(dispatch)=>{fetch(bookPath+`/${id}/accessors`).then(res=>res.json()).then(obj=>{

let accessors = obj

dispatch(bookAccessors(accessors)
)}
)}
}

    

function updateBookAccess({access,level}){
let config={   
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      },
      body: JSON.stringify({
         id: access.id,
         access: level 
    })}
    return(dispatch)=>{fetch(accessBookPath+`/${access.id}/update`,config).then(res=>res.json()).then(obj=>{
        debugger
        dispatch(getBookAccessors(access.book.id))
    })}

}
function deleteBookAccess(access){
        let config={   
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      },
      body: JSON.stringify({
          id: access.id
    })}
    return(dispatch)=>{fetch(accessBookPath+`/${access.id}/delete`).then(res=>res.json()).then(obj=>{
        
        dispatch(getBookAccessors(access.book.id))
    })}
}
function getUserBookAccess(){
    return(dispatch)=>{fetch(userPath+`/${localStorage.getItem("currentUser")}/access_books`).then(res=>res.json()).then(obj=>{

        let accessors = obj
        dispatch(userBookAccessors(accessors))
    })}
}
const setCurrentBook=(book)=>{
    return{type: "SET_CURRENT_BOOK",  book}
}
const userBookAccessors=(accessors)=>{return{type:"BOOK_ACCESS_OF_USER",accessors}}
const bookAccessors=(accessors)=>{return{type: "BOOK_ACCESSORS", accessors}}
 const booksOfUser = (books)=>{return{type:"BOOKS_OF_USER",books}}
 const booksInView = (books)=>{return{type:"BOOKS_IN_VIEW",books}}
 const bookInView = (book)=>{return{type:"BOOK_IN_VIEW",book}}
 const getallbooks=(books)=>{return{type: "ALL_BOOKS",books}}
export { getUserBookAccess,updateBookAccess,deleteBookAccess,getBookAccessors,accessBook,updateBook,startBook,getAllBooks,getBooksOfUser,useBookActions,getBook, setCurrentBook}