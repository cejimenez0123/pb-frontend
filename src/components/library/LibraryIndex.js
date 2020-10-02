import React from 'react'
import LibraryIndexBox from "./LibraryIndexBox"

function LibraryIndex(props){

   let t = []
   if(props.libraries){

     

  t = props.libraries.map(t=>{
    
     let books =props.bookLibraries.filter(x=>{
         return x.attributes.library.id == t.id
      })
   
      return(<LibraryIndexBox  allBooks={props.allBooks} booksOfLib={books} library={t}/>)})
   }
        return(<div className="list-group ">
        
        {t}
        
        </div>)
    
}
export default LibraryIndex