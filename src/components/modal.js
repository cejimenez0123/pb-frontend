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
    <p onClick={()=>handleShow()}>{props.button}</p>
        <div onClick={(e)=>handleModalClose(e)} style={{width: "100%",display: show}} class="modal">
            <div   className={`modalContent ${props.className}`}>
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