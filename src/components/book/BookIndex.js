import React from 'react'

function BookIndex(props){
        function  renderIf(){   
           
            if(props.books){

    return props.books.map(book=>{
            book = book.attributes
         
            return(<div>
                    <a href={`http://localhost:3001/books/${book.id}`}>{book.title}</a>
            </div>)
        })}
        }
        let name
        if(props.user){
                   name= `${props.user.name}'s Books`
                }
                console.log("BOOKINDDEX")
        return(
            <div>
                {name}
                {renderIf()}
            </div>
        )


}

export default BookIndex