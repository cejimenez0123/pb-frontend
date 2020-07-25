import React, {useState} from 'react'
import { render } from 'react-dom'
import {ListGroup,Modal,Button} from 'react-bootstrap'
const Page = (props)=>{
    function handleDbClick(){
        debugger

    }
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    console.log(props.page)
     if(props.page){
        
         let page= props.page
        return(
             <div id="pages" >
           {/* <ListGroup.Item>
           
           </ListGroup.Item> */}
           <div variant="primary" onClick={handleShow}>
           {page.data}
           </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
       by  <a by href={`/users/${page.user.id}`}> {page.user.username}</a>
        </Modal.Header>
        <Modal.Body>{page.data}</Modal.Body>
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
        // <div id="pages" >
        //    <ListGroup.Item>
        //    {props.page.data}
        //    </ListGroup.Item>
        // </div>
    )
    }else if(props.page.attributes){
        let page = props.page.attributes
        return(
        <div id="pages" >
           {/* <ListGroup.Item>
           
           </ListGroup.Item> */}
           <div variant="primary" onClick={handleShow}>
           {page.data}
           </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{page.data}</Modal.Body>
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
export default Page