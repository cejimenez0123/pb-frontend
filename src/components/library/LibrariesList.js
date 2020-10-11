import React from 'react'
import AddToLibraryList from "./AddToLibraryList"
function LibrariesList(props){

   let t = []
   if(props.libraries){
   
  t = props.libraries.map(t=>{return(
      <AddToLibraryList book={props.book} library={t}/>
   
      )})
   }
  
        return(<div className="lib-list list-group">
        
        {t}
      
        </div>)
    
}
export default LibrariesList