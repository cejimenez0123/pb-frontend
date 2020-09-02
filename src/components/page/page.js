import React, {useState,useRef} from 'react'
import { render } from 'react-dom'
import JoditEditor from 'jodit-react'
import {useStore,useDispatch } from 'react-redux'
import {ListGroup,Modal,Button} from 'react-bootstrap'
import {getPageComments} from "../../actions/PageActions"
import PageCommentInput from "./PageCommentInput"
import PageCommentIndex from "./PageCommentIndex"
//.jodit-toolbar__box
export default function Page(props){
    const dispatch = useDispatch()
    const store = useStore()
     const [show, setShow] = useState(false)
    let content
    const editor = useRef(null)
    function editPage(page){

        let div = document.getElementsByClassName("ModalBody")[0]
    }
    
    let comments = store.getState().pages.pageCommentsInView

   const handleCommentClick=(e)=>{
     debugger
   let div = document.querySelector(`#modal-${props.page.id}`)
   div.style.display = "block"
   }
   const handleModalClose=()=>{
     debugger
     let div = document.querySelector(`#modal-${props.page.id}`)
   div.style.display = "none"
   }
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const config={readonly: true,width: 900,iframe: true}
   let editBtn = null
     if(props.page.attributes){
     
         let page= props.page.attributes
        content = page.data
        if (page.user.id === localStorage.getItem("currentUser")){
            editBtn = (<button onClick={()=>editPage(props.page)}>Edit Page</button>)
        }
       
        return(
             <div  >
           
             {/* <JoditEditor
            	ref={editor}
                value={content}
                config={config}
                // onChange={newContent => {handleOnClick(newContent)}}
            /> */}
           {/* <ListGroup.Item>
           
           </ListGroup.Item> */}
           <div variant="primary" onClick={handleShow}>
            <div dangerouslySetInnerHTML={{__html: page.data}}/>
           </div>

      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
      <h5> from {page.book.title} by  <a by href={`/users/${page.user.id}`}> {page.user.username}</a>{editBtn}
        </h5></Modal.Header>
        <div className="body">
        <Modal.Body>
        <div className="ModalBody">
        <div dangerouslySetInnerHTML={{__html: page.data}}/>
       
        </div>
        <PageCommentInput page={page}/>
        <PageCommentIndex getPageComments={(page)=>dispatch(getPageComments(page))} page={page} />
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
      </Modal> */}
    
        </div>
      
    )
    }else if(props.page){
        let page = props.page
         content = page.data
        return(
        <div  >
           
            <div className="page" style={{height: "0px"}}>
            <div>
            <JoditEditor
            	ref={editor}
                value={content}
                config={config}
                // onChange={newContent => {handleOnClick(newContent)}}
            />
            <button variant="primary"  onClick={(e)=>handleCommentClick(e)} >Comment</button>
            <div id={`modal-${page.id}`}onBlur={handleModalClose} class="modal">
 <div class="modal-content">
    <span class="close">&times;</span>
    <JoditEditor
            	ref={editor}
                value={content}
                config={config}
                // onChange={newContent => {handleOnClick(newContent)}}
            />
  </div>
            </div>
            </div>
            </div>
           {/* <ListGroup.Item>
           
           </ListGroup.Item> */}
           {/* <div variant="primary" onClick={handleShow}>
            <div dangerouslySetInnerHTML={{__html: page.data}}/>
           </div> */}

{/* 
      <Modal size="lg" show={show} onHide={handleClose} style={{width: "1220px"}}>
        <Modal.Header closeButton>
          <Modal.Title><h5>from {page.book.title} by  <a by href={`/users/${page.user.id}`}> {page.user.username}</a>{editBtn}
        </h5></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <JoditEditor
            	ref={editor}
                value={content}
                config={config}
                // onChange={newContent => {handleOnClick(newContent)}}
            />
        <PageCommentInput page={page}/>
        <PageCommentIndex getPageComments={(page)=>dispatch(getPageComments(page))} page={page} /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
  
        </div>)

}else{
  return (<div>Nothing here</div>)
}
    
    }

    

