import React from 'react'

function LibraryIndexBox(props){

 
    let jsx = []
    if(props.library.attributes){
        
        let lib = props.library.attributes
        jsx=(<li><a href={`http://localhost:3001/libraries/${lib.id}`}>{lib.name}</a></li>)
    }else if(props.library){
        let lib = props.library
        jsx=(<li><a href={`http://localhost:3001/libraries/${lib.id}`}>{lib.name}</a></li>)
    }
    return(<div>
        {jsx}
    </div>)
}
export default LibraryIndexBox