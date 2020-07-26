import React, {useState} from 'react'
import PageInput from "../page/PageInput"
import {connect } from "react-redux"
import { getPagesOfBook } from "../../actions/PageActions"
import {Modal,Button} from "react-bootstrap"
import PageCards from "../page/PageCards"

function Book(props){
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
    if(user_id==localStorage.getItem("currentUser")){
       return(<div>
            <PageInput book={props.book}/>
            </div>)       
        }
    }

function renderIf(){
    
        if(props.book ){
           let pages = props.pages.filter(page=>{
               return page.attributes.book_id == props.book.id
           })
            return(<div>
                <h3>{props.book.title} </h3>
                {ifEditable()}
                <PageCards pages={pages}/>
            </div>)
        };
    };
   function editBtn(){
       let btn = null
        if(props.book.user.id === localStorage.getItem("currentUser")){
            btn = (<button>Edit Book</button>)
        }
        return btn
    }
    
let book = props.book
     
        return(<div>
        <div onDoubleClick={handleShow}>
        {renderIf()}
  </div>
  <div>
 <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
      by  <a by href={`/users/${book.user.id}`}> {book.user.username}</a>
      {editBtn()}
      
       </Modal.Header>
        <Modal.Body>{renderIf()}</Modal.Body>
       <Modal.Footer>
            
         <Button variant="secondary" onClick={handleClose}>
            Close
           </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
       </Modal> 
</div>
 </div>
        )

}
function mapDispatch(dispatch){
    return{getPagesOfBook:(id)=>dispatch()}
}
function mapState(state){
    return{
        pages: state.pages.pages
            }
}
export default connect(mapState,mapDispatch)(Book)

