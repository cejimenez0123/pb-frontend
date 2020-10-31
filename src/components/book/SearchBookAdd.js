import React, {useState} from 'react'
import {useStore,useDispatch } from 'react-redux'
import {addBookToLibrary} from "../../actions/LibraryAction"
 function SearchBookAdd(props){
    let filtered = bookToHTML(props.books)
    const dispatch = useDispatch()
    function handleAddBook(book){
        let hash = {bookId: book.id,libraryId: props.library.id}
        dispatch(addBookToLibrary(hash))

    }
   
    function bookToHTML(books){
        console.log("BOOKsOFLIB",props.booksOfLibrary)
           books= books.filter(book=>{ 
              
           let  x = props.booksOfLibrary.find(x=>{ 
                debugger
                return x.attributes.id===book.id})
                 debugger
               return !x
                
            })

        let html = books.map(book=>{
            book = book.attributes
            return(<div className="list-group-item">
            
           {book.title} by {book.user.username} <img onClick={()=>handleAddBook(book)}style={{width:"30xp",height:"30px"}}src="https://image.flaticon.com/icons/png/512/32/32339.png"/>
            </div>)
        })

        console.log("html",html)
   return html
    }
    function filterFunc(e){
let val = e.target.value
       let books= props.books.filter(book=>{

               return book.name.includes(val)||book.user.username.includes(val)
            })
            
        filtered= bookToHTML(books)
    }

    console.log("Filtered",filtered)
    // function render(){
    //     return()
    // }

    return(<div className={"SearchBookAdd"} style={{backgroundColor:"blue"}}
    ><input className="form-control mr-sm-2 " type="search" placeholder="search..." onKeyUp={(e)=>filterFunc(e)}/>
           <div className="list-group">
            {filtered}
            </div>
        </div>
    )
}
export default SearchBookAdd