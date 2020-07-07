import React from 'react'
import Book from './book'
const Books =(props)=>{
    let books="location not available"
    if(props.books){
      books=  props.books.map((book,i)=>{
           return <Book book={book.attributes} key={i}/>
        })
        

    }
  
    return(<div>
    {books}
    </div>)
}
export default Books