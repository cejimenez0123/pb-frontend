import React from 'react'
import {useStore }from 'react-redux'
import BookIndexBox from "./BookIndexBox"
import Popup from "reactjs-popup"
import "../../App.css"

export default function BookIndex(props){
    const store = useStore()

  
        
        
        function  renderIf(){   
  let html
            if(props.books){
       
   html=  props.books.map((book,i)=>{
            book = book.attributes
         
           return(<BookIndexBox key={i} book={book}/>
           
           )
})}
return(<div className="list-group">
    {html}
</div>)
}
          console.log("BOOKINDDEX")
        return(
            <div className="bookIndex">
           
               
                {renderIf()}
                
             
            </div>
        )

            
}