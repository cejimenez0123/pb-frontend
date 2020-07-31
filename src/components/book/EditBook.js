import React, {useState} from 'react'
import PageInput from "../page/PageInput"
import {connect } from "react-redux"
import { getPagesOfBook } from "../../actions/PageActions"
import PageCards from "../page/PageCards"
import {Modal,Button} from "react-bootstrap"
function EditBook (props){
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    function ifEditable(){

let user_id 
if(props.book.user_id){
    user_id = props.book.user_id
}
if(props.book.user){
    user_id = props.book.user.id
}


        if(user_id== localStorage.getItem("currentUser")){
          
            let pageInput = (
            
            <div>
            <PageInput book={props.book}/>
            </div>)
            return pageInput
           
        }
    }
   let html = null 
   function renderIf(){
    
        if(props.book ){
           let pages = props.pages.filter(page=>{
               return page.attributes.book_id == props.book.id
           })
            html =(<div>
            <div onClick={handleShow}>
                <h6>{props.book.title} </h6>
                </div>
                {ifEditable()}
                <PageCards pages={pages}/>
            </div>)
        }
    }
      renderIf()
         
        return(<div>
    {html}


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
     <button>Post to Book</button>
      
       </Modal.Header>
        <Modal.Body>{html}</Modal.Body>
       <Modal.Footer>
            
         <Button variant="secondary" onClick={handleClose}>
            Close
           </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
       </Modal>
        </div>)
      
}
function mapDispatch(dispatch){
    return{getPagesOfBook:(id)=>dispatch()}
}
function mapState(state){
    return{
        pages: state.pages.pages
    }
}
export default connect(mapState,mapDispatch)(EditBook)

