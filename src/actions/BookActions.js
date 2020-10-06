import {history} from "../history"
import {followBook } from "./FollowActions"
const bookPath = "http://localhost:3000/books"
const userPath = "http://localhost:3000/users"


function useBookActions(){
    return{getBooksOfUser: id=>{getBooksOfUser(id)}}
}
function startBook(book,is_Home_Book="false"){
    let config={   
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      },
      body: JSON.stringify({
          userId: localStorage.getItem("currentUser"),
          title: book.name,
          privacy: book.privacy,
          isHomeBook: is_Home_Book
    })}
    return(dispatch)=>{fetch(bookPath,config).then(res=>res.json()).then(obj=>{
        debugger
        let book
        if(obj.data.attributes){
        book = obj.data.attributes
        followBook(book.id)
        history.push(`/books/${book.id}`)
        dispatch(bookInView(book)) 
       
    
    
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
        dispatch(booksInView(book))
        

    })}
}

function getBook(id){
 
   return(dispatch)=>{ fetch(bookPath+"/"
    +id).then(res=>res.json()).then(obj=>{
  debugger
        let book = obj.data.attributes
        dispatch(bookInView(book))
    })}
}
const setCurrentBook=(book)=>{
    return{type: "SET_CURRENT_BOOK",  book}
}
 const booksOfUser = (books)=>{return{type:"BOOKS_OF_USER",books}}
 const booksInView = (books)=>{return{type:"BOOKS_IN_VIEW",books}}
 const bookInView = (book)=>{return{type:"BOOK_IN_VIEW",book}}
 const getallbooks=(books)=>{return{type: "ALL_BOOKS",books}}
export { startBook,getAllBooks,getBooksOfUser,useBookActions,getBook, setCurrentBook}