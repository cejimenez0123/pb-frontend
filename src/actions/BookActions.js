import {history} from "../history"
import {followBook } from "./FollowActions"
const bookPath = "/books"
const userPath = "/users"


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
          book: book.intro,
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
const setCurrentBook=(book)=>{
    return{type: "SET_CURRENT_BOOK",  book}
}
 const booksOfUser = (books)=>{return{type:"BOOKS_OF_USER",books}}
 const booksInView = (books)=>{return{type:"BOOKS_IN_VIEW",books}}
 const bookInView = (book)=>{return{type:"BOOK_IN_VIEW",book}}
 const getallbooks=(books)=>{return{type: "ALL_BOOKS",books}}
export { updateBook,startBook,getAllBooks,getBooksOfUser,useBookActions,getBook, setCurrentBook}