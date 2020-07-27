import React, {useState} from 'react'
import { render } from 'react-dom'
import {useStore } from 'react-redux'
import {ListGroup,Modal,Button} from 'react-bootstrap'
import PageCommentInput from "./PageCommentInput"
import PageCommentIndex from "./PageCommentIndex"
const Page = (props)=>{
    
    function editPage(page){

        let div = document.getElementsByClassName("ModalBody")[0]
    }
    const store = useStore()
    let comments = store.getState().pages.pageCommentsInView

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
   let editBtn = null
     if(props.page.attributes){
     
         let page= props.page.attributes
         
        if (page.user.id === localStorage.getItem("currentUser")){
            editBtn = (<button onClick={()=>editPage(props.page)}>Edit Page</button>)
        }
        return(
             <div id="pages" >
           {/* <ListGroup.Item>
           
           </ListGroup.Item> */}
           <div variant="primary" onClick={handleShow}>
           {page.data}
           </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
       by  <a by href={`/users/${page.user.id}`}> {page.user.username}</a>{editBtn}
        </Modal.Header>
        <div className="body">
        <Modal.Body>
        <div className="ModalBody">
        {page.data}
        </div>
        <PageCommentInput page={page}/>
        <PageCommentIndex page={page} comments={comments}/>
        </Modal.Body>
        </div>
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
      
    )
    }else if(props.page){
        let page = props.page
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