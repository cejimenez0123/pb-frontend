import React from 'react'
import Book from './book'
import PublishedBook from "./PublishedBook"
const Books =(props)=>{
    let books="location not available"
    if(props.books.length>0){

   
      books=  props.books.map((book,i)=>{
           return <Book book={book.attributes} key={i}/>
        })
       }  else{

           books="Add some books to library"
       }

    
  
    return(<div className="mainBook">
    {books}
    </div>)
}
export default Books