import React from 'react'
import {useStore }from 'react-redux'
import BookIndexBox from "./BookIndexBox"
import Popup from "reactjs-popup"
import "../../App.css"

export default function BookIndex(props){
    const store = useStore()

  
        
        
        function  renderIf(){   
  
            if(props.books){
       
    return props.books.map((book,i)=>{
            book = book.attributes
         
           return(<BookIndexBox key={i} book={book}/>
           
           )
})}}
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