import React from 'react'
import LibraryIndexBox from "./LibraryIndexBox"

function LibraryIndex(props){

   let t = []
   if(props.libraries){
  t = props.libraries.map(t=>{return(<LibraryIndexBox library={t}/>)})
   }
  
        return(<div>
        <ul>
        {t}
        </ul>
        </div>)
    
}
export default LibraryIndex