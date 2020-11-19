import React from 'react'
import {useStore }from 'react-redux'
import BookIndexBox from "./BookIndexBox"
import Popup from "reactjs-popup"
import "../../App.css"

export default function BookIndex(props){
    const store = useStore()

  
        
        
         
  let html=""
    if(props.books && props.books.length>0){
      debugger
   html=  props.books.map((data,i)=>{
            let book
    
         switch(data.type){
             case"book":
             book = data.attributes
           return(<BookIndexBox key={i} book={book}/>
           
           )
           case "follow_book":
                book = data.attributes.book
            return(<BookIndexBox key={i} book={book}/>)
           }
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