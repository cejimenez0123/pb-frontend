import React, {useState} from 'react'
import {useStore } from 'react-redux'
export default function SearchBookAdd(props){
    let filtered = bookToHTML(props.books)

    
   
    function bookToHTML(books){
        let html = books.map(book=>{
            book = book.attributes
            return(<div className="list-group-item">
            
           {book.title} by {book.user.username} <i class="far fa-plus-square"></i>
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
debugger
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
