import React,{useState} from 'react'
import LibraryIndex from "../library/LibraryIndex"
import LibrariesList from "../library/LibrariesList"
import {connect,useStore,useDispatch} from 'react-redux'
import {getAllLibraries} from "../../actions/LibraryAction"
import Book from "./book"
import {Modal,Button} from 'react-bootstrap'
import Popup from "reactjs-popup"
function BookIndexBox(props){
    const store = useStore()

 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
 
let book
if(props.book.attributes){
    book = props.book.attributes
}else{
    book = props.book
}

    return(<div>
    <div onClick={handleShow}>
 -         <a>{book.title}</a></div> <Popup trigger={<button>Add to Libray</button> } position="right center">
 
                  <LibrariesList book={book} libraries={props.allLibraries}/>      
               </Popup>
               <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
      by  <a by href={`/users/${book.user.id}`}> {book.user.username}</a>
      
      
       </Modal.Header>
        <Modal.Body><Book book={props.book} /></Modal.Body>
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
function mapState(state){

    return{allLibraries: state.libraries.libraries}
}
export default connect(mapState,null)(BookIndexBox)