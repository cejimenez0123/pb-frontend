import React from 'react'
import LibraryIndex from "../library/LibraryIndex"
import LibrariesList from "../library/LibrariesList"
import {useStore} from 'react-redux'
import Popup from "reactjs-popup"
function BookIndexBox(props){
    const store = useStore()
    const lib = store.getState().libraries

let book
if(props.book.attributes){
    book = props.book.attributes
}else{
    book = props.book
}

    return(<div>
 }          <a href={`http://localhost:3001/books/${book.id}`}>{book.title}</a> <Popup trigger={<button>Add to Libray</button> } position="right center">
 
                  <LibrariesList book={book} libraries={lib.librariesInView}/>      
               </Popup>
        </div>)
}
export default BookIndexBox