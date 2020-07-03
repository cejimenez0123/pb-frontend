import React from 'react'

function BookIndex(props){
        function 
        renderIf(){    return    props.books.map(book=>{
            book = book.attributes
         
            return(<div>
                    <a href={`http://localhost:3001/books/${book.id}`}>{book.title}</a>
            </div>)
        })
        }
        return(
            <div>
                Your Books
                {renderIf()}
            </div>
        )


}

export default BookIndex