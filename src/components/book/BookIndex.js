import React from 'react'
import {useStore }from 'react-redux'
import BookIndexBox from "./BookIndexBox"
import Popup from "reactjs-popup"
import "../../App.css"

export default function BookIndex(props){
    const store = useStore()

  
        
        
         
  let html=""
    if(props.books){
       
   html=  props.books.map((book,i)=>{
            book = book.attributes
         
           return(<BookIndexBox key={i} book={book}/>
           
           )
        })
        return(<div className="list-group BookIndex">
             {html}
            </div>)
        }else{
            return(
            <div>
    {html}
    </div>)
}


      

            
}