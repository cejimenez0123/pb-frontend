
const bookPath = "http://localhost:3000/books"
const userPath = "http://localhost:3000/users"


function useBookActions(){
    return{getBooksOfUser: id=>{getBooksOfUser(id)}}
}
function startBook(title){
    let config={   
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      },
      body: JSON.stringify({
          userId: localStorage.getItem("currentUser"),
          title: title
    })}
    return(dispatch)=>{fetch(bookPath,config).then(res=>res.json()).then(obj=>{
        debugger
        const book = obj.data.attributes
    dispatch(setCurrentBook(book))
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

 const setCurrentBook =(book)=>{return{type: "SET_CURRENT_BOOK", book: book}}
 const booksOfUser = (books)=>{return{type:"BOOKS_OF_USER",books}}
 const getallbooks=(books)=>{return{type: "ALL_BOOKs",books}}
export { startBook,getAllBooks,getBooksOfUser,useBookActions,setCurrentBook}