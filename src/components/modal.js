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
    <div onClick={()=>handleShow()}>{props.button}</div>
        <div onClick={(e)=>handleModalClose(e)} style={{width: "100%",display: show}} className="modal">
            <div   className={`modalContent ${props.className}`}>
                

                    <div>
                        {props.content}
                    </div>
                </div>
            </div>
        </div>
)

}

export default Modal