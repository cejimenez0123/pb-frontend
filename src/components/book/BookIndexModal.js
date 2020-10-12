import React, {useState} from 'react'
import BookIndex from "../book/BookIndex"
function BookIndexModal(props){
let [show,setShow]=useState("none")
    function handleShow(){

        if(show==="none"){
            setShow("block")
        }
    }
   
   function handleModalClose(e){

      if(e.target === e.currentTarget){
       setShow("none")
     }
  }
  function blank(){

  }
     
    return(
    <div>
    <h3 onClick={()=>handleShow()}>Books</h3>
        <div  onClick={(e)=>handleModalClose(e)} style={{width: "100%",display: show}} class="modal">
            <div style={{width: "600px"}} class="modalContent">
                <span  class="close">&times;</span>
                        <BookIndex books={props.books}/>
                </div>
            </div>
        </div>
)

}
export default BookIndexModal