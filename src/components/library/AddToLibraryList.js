import React from 'react'
import {useDispatch} from "react-redux"
import {addBookToLibrary} from '../../actions/LibraryAction'
function AddToLibraryList(props){
    const dispatch = useDispatch()
    function handleOnClick(){
        dispatch(addBookToLibrary({bookId: props.book.id,libraryId: props.library.id}))
    }
    let jsx = []
    if(props.library.attributes){
        
        let lib = props.library.attributes
        jsx=(<li>{lib.name}<button onClick={()=>handleOnClick()}>Add Book</button></li>)
    }else if(props.library){
        let lib = props.library
        jsx=(<li>{lib.name}<button onClick={()=>handleOnClick()}>Add Book</button></li>)
    }
    return(<div>
        {jsx}
    </div>)
}
export default AddToLibraryList