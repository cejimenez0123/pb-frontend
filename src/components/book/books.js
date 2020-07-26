import React from 'react'
import Book from './book'
import PublishedBook from "./PublishedBook"
const Books =(props)=>{
    let books="location not available"
      books=  props.books.map((book,i)=>{
           return <Book book={book.attributes} key={i}/>
        })
        

    
  
    return(<div>
    {books}
    </div>)
}
export default Books