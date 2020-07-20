import React from 'react'

function LibraryIndexBox(props){

 
    let jsx = []
    if(props.library.attributes){
        
        let lib = props.library.attributes
        jsx=(<li>{lib.name}</li>)
    }else if(props.library){
        let lib = props.library
        jsx=(<li>{lib.name}</li>)
    }
    return(<div>
        {jsx}
    </div>)
}
export default LibraryIndexBox