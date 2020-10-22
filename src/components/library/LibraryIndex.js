import React from 'react'
import LibraryIndexBox from "./LibraryIndexBox"

function LibraryIndex(props){

   let t = []
   if(props.libraries){

     

  t = props.libraries.map((t,index)=>{
    
     let books =props.bookLibraries.filter(x=>{
         return x.attributes.library.id === t.id
      })
   
      return(<LibraryIndexBox  key={index} allBooks={props.allBooks} booksOfLib={books} library={t}/>)
      })
   }
        return(<div className="LibraryIndex list-group ">
        
        {t}
        
        </div>)
    
}
export default LibraryIndex