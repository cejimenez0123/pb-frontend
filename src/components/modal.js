import React ,{useState} from "react"


function Modal(props){

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
    
    return(
    <div>
    <h3 onClick={()=>handleShow()}>{props.button}</h3>
        <div onClick={(e)=>handleModalClose(e)} style={{width: "100%",display: show}} class="modal">
            <div   class="modal-content">
                <span  class="close">&times;</span>

                    <div>
                        {props.content}
                    </div>
                </div>
            </div>
        </div>
)

}

export default Modal