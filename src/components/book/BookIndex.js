import React from 'react'
import useStore from 'redux'
function BookIndex(props){
        function  renderIf(){   
           
            if(props.books){
        function addBookLibrary(){


        }
    return props.books.map((book,i)=>{
            book = book.attributes
         
            return(<div>
                    <a key={i} href={`http://localhost:3001/books/${book.id}`}>{book.title}</a>
           <button onClick={()=>addBookLibrary()}>Add to Libray</button> </div>)
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