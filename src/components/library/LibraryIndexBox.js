import React,{useState} from 'react'
import {Modal,Button} from "react-bootstrap"
import {useDispatch} from "react-redux"
import BookLibrary from "./BookLibrary"
function LibraryIndexBox(props){

  const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    let jsx = null
    
    if(props.library.attributes){
        
        let lib = props.library.attributes
        return (<div className=" libraryIndexBox list-group-item"><a href={`/libraries/${lib.id}`}>{lib.name}</a>
        
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h3>{lib.name}</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body><BookLibrary library={lib} booksOfLib={props.booksOfLib}/></Modal.Body>
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
    }else if(props.library){
        let lib = props.library
        return (<div><li onClick={handleShow}>{lib.name}</li>
        
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h3>{lib.name}</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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
   
    
}
export default LibraryIndexBox