
const bookPath = "http://localhost:3000/books"
startBook(title){
    let config={   
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      },
      body: JSON.stringify({
          userId: localStorage.getItem("currentUser")
          title: title
    })}
    return(dispatch)=>{fetch(bookPath,config).then(res=>res.json()).then(obj=>{
        debugger
        const book = obj.data.
    dispatch(setCurrentBook(book))
    })}
}

 const setCurrentBook =(book)=>{type: "SET_CURRENT_BOOK", book}
export { startBook}