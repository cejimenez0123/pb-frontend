import React from 'react'
import LibraryIndexBox from "./LibraryIndexBox"

function LibraryIndex(props){

   let t = []
   if(!props.libraries){

     

  t = props.libraries.map((t,index)=>{
    
     let books =props.bookLibraries.filter(x=>{
         return x.attributes.library.id === t.id
      })
   
      return(<LibraryIndexBox  key={index} allBooks={props.allBooks} booksOfLib={books} library={t}/>)
      })

        return(<div className="LibraryIndex  ">
        <div className="list-group">
        {t}
        </div>
        </div>)
        
        }else{
           return(
              <div className="LibraryIndex">
              <div className="emptyMessage"> 
                  <h2>No libraries:(</h2>
              </div>
              </div>
           )

        }
    
}
export default LibraryIndex