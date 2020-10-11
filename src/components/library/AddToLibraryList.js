import React from 'react'
import {useDispatch,useStore,connect} from "react-redux"

import {addBookToLibrary,deleteBookLibrary,getBookLibraries} from '../../actions/LibraryAction'
function AddToLibraryList(props){
    const dispatch = useDispatch()
    const store = useStore()
    
    function handleOnClick(){
        addBookToLibrary({bookId: props.book.id,libraryId: props.library.id})
    }
    function handleSwitch(e){
       
        if(e.target.checked){
            addBookToLibrary({bookId: props.book.id,libraryId: props.library.id})
        }else{
            deleteBookLibrary({})
        }
    }
    let bookLibOfBook
    console.log(props.bookLib)
    if(props.bookLib && props.bookLib.length >0){
        
       bookLibOfBook = props.bookLib.find(bl=>{
           
       return bl.attributes.book.id===props.book.id && bl.attributes.library.id ===props.library.id
    })
    }else{
        dispatch(getBookLibraries())
    }
    console.log(bookLibOfBook)
     let slider =""
    if(bookLibOfBook){
        
        slider=( <label class="switch">
  <input checked="true" onChange={(e)=>handleSwitch(e)} type="checkbox"/>
  <span class="slider"></span>
  </label>)}else{
      slider=( <label class="switch">
  <input  onChange={(e)=>handleSwitch(e)} type="checkbox"/>
  <span class="slider"></span>
  </label>)
  }

  

    
    let jsx = []
    if(props.library.attributes){
  
        let lib = props.library.attributes
        jsx=(<div className="list-group-item">{lib.name}
        {slider}
<button onClick={()=>handleOnClick()}>Add Book</button></div>
        )
    }else if(props.library){
        let lib = props.library
        jsx=(<li>{lib.name}
        <button onClick={()=>handleOnClick()}>Add Book</button></li>)
    }
    return(<div className="lib-list-item">
        {jsx}
        
    </div>)
}
const mapState=(state)=>{
   
    return{
        bookLib: state.libraries.bookLibraries
    }
}
export default connect(mapState)(AddToLibraryList)