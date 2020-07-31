import React from 'react'
import Book from "../book/book"
function BookLibrary(props){

let x=  props.booksOfLib.map(x=> <Book book={x.attributes.book}/>)
    
    return(<div>
{x}
    </div>
)

}
export default BookLibrary