import React, {useState,useEffect} from 'react'
import {useDispatch,useStore,connect} from "react-redux"

import {addBookToLibrary,deleteBookLibrary,getBookLibraries} from '../../actions/LibraryAction'

function AddToLibraryList(props){

    let bookLibOfBook = null
    const dispatch = useDispatch()
    const store = useStore()
    
    // let [bookLibOfBook,setBookLibOfBook]=useState(null)
    function handleOnClick(){
        addBookToLibrary({bookId: props.book.id,libraryId: props.library.id})
    }
    function handleSwitch(e){
       
        
        if(e.target.checked){
            addBookToLibrary({bookId: props.book.id,libraryId: props.library.id})
        }else{
            let a = props.bookLib.find(bl=>{
           
       return bl.attributes.book.id===props.book.id && bl.attributes.library.id ===props.library.id
    
    })
            deleteBookLibrary(a)
        }
    }
    
  
    if(props.bookLib && props.bookLib.length >0){
       
   bookLibOfBook = props.bookLib.find(bl=>{
           
       return bl.attributes.book.id===props.book.id && bl.attributes.library.id ===props.library.id
    
    })
    
    }else{
        dispatch(getBookLibraries())
    }
     let slider =""
    if(bookLibOfBook){
        console.log(bookLibOfBook)
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