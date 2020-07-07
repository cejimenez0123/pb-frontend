import React from 'react'
import Book from './book'
import PublishedBook from "./PublishedBook"
const Books =(props)=>{
    let books="location not available"
    if(window.location.pathname=="http://localhost:3001/libraries/1"){
        books = props.books.map((book,i)=>{
            return (<PublishedBook book={book.attributes} key={i}/>)
        })
        
    } 
    else if (props.books){
      books=  props.books.map((book,i)=>{
           return <Book book={book.attributes} key={i}/>
        })
        

    }
  
    return(<div>
    {books}
    </div>)
}
export default Books