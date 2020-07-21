import React from 'react'
import AddToLibraryList from "./AddToLibraryList"
function LibrariesList(props){

   let t = []
   if(props.libraries){
  t = props.libraries.map(t=>{return(
      <AddToLibraryList book={props.book} library={t}/>
      )})
   }
  
        return(<div>
        <ul>
        {t}
        </ul>
        </div>)
    
}
export default LibrariesList