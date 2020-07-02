import {history} from "../history"
const bookPath = "http://localhost:3000/books"
const userPath = "http://localhost:3000/users"


function useBookActions(){
    return{getBooksOfUser: id=>{getBooksOfUser(id)}}
}
function startBook(title,is_Home_Book="false"){
    let config={   
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      },
      body: JSON.stringify({
          userId: localStorage.getItem("currentUser"),
          title: title,
          isHomeBook: is_Home_Book
    })}
    return(dispatch)=>{fetch(bookPath,config).then(res=>res.json()).then(obj=>{
        debugger
        let book
        if(obj.data.attributes){
        book = obj.data.attributes
        if(book.is_home_book !== "true"){
        dispatch(setCurrentBook(book)) 
        }}
    
    })}
}
function getAllBooks(){

    return(dispatch)=>{fetch(bookPath).then(res=>res.json()).then(obj=>{
        debugger
    let books = obj.data
    dispatch(getallbooks(books))
    })}
}
function getBooksOfUser(id){

    return(dispatch)=>{fetch(userPath+"/"+id+"/books").then(res=>res.json()).then(obj=>{
        debugger
        dispatch(booksOfUser(obj))

    })}
}
function getBook(id){
   return(dispatch)=>{ fetch(bookPath+"/"
    +id).then(res=>res.json()).then(obj=>{
        
    })}
}
const setCurrentBook=(book)=>{
    debugger
    history.push(`/books/${book.id}`)
    return{type: "SET_CURRENT_BOOK", book: book}
}
 const booksOfUser = (books)=>{return{type:"BOOKS_OF_USER",books}}
 const getallbooks=(books)=>{return{type: "ALL_BOOKs",books}}
export { startBook,getAllBooks,getBooksOfUser,useBookActions,getBook, setCurrentBook}