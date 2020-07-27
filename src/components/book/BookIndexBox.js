import React,{useState} from 'react'
import LibraryIndex from "../library/LibraryIndex"
import LibrariesList from "../library/LibrariesList"
import {useStore,useDispatch} from 'react-redux'
import Book from "./book"
import {Modal,Button} from 'react-bootstrap'
import Popup from "reactjs-popup"
function BookIndexBox(props){
    const store = useStore()
const dispatch = useDispatch()
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const lib = store.getState().libraries
let book
if(props.book.attributes){
    book = props.book.attributes
}else{
    book = props.book
}

    return(<div>
    <div onClick={handleShow}>
 -         <a>{book.title}</a></div> <Popup trigger={<button>Add to Libray</button> } position="right center">
 
                  <LibrariesList book={book} libraries={lib.librariesInView}/>      
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
export default BookIndexBox