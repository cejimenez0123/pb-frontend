import React, {useState,useRef} from 'react'
import { render } from 'react-dom'
import JoditEditor from 'jodit-react'
import {useStore,useDispatch } from 'react-redux'
import Modal from "../modal"
import {getPageComments} from "../../actions/PageActions"
import PageCommentInput from "./PageCommentInput"
import PageCommentIndex from "./PageCommentIndex"
//.jodit-toolbar__box
export default function Page(props){
  const dispatch = useDispatch()
  const store = useStore()
  const [show, setShow] = useState("none")
  let content
  const editor = useRef(null)
  
  function editPage(page){
    let div = document.getElementsByClassName("ModalBody")[0]
  }
    
  let comments = store.getState().pages.pageCommentsInView

  const handleCommentClick=(e)=>{ 
    let div = document.querySelector(`#modal-${props.page.id}`)
    div.style.display = "block"
   }
  const handleModalClose=(e)=>{
   let div = document.querySelector(`#modal-${props.page.id}`)
     if(e.target === e.currentTarget){
       console.log("!")
       e.target.style.display="none"

     }
   }
  const handleClose = () => setShow("none");
  const handleShow = () => setShow("block");
  const config={readonly: true,width: 800,iframe: true}
  let editBtn = null
    
  if(props.page){
    let page = props.page
    content = page.data
    // dispatch(getPageComments(page))
      return(
        <div className="pageContainer">
          <div className="page" >
            <div>
              <JoditEditor
            	ref={editor}
              value={content}
              config={config}
                // onChange={newContent => {handleOnClick(newContent)}}
            />
           <Modal 
           // onClick={(e)=>handleCommentClick(e)}
           button ={ <button variant="primary"   >Comment</button>} content={
              <div>
                  <div className={"modalInfo"}>{page.book.title} by 
                   <a by href={`/users/${page.user.id}`}> 
                    {page.user.username}
                   </a>
                  </div>

                 <JoditEditor
                 	ref={editor}
                  value={content}
                  config={config}
                // onChange={newContent => {handleOnClick(newContent)}}
                />
              <div >
                <div className="commentSection">
                <PageCommentInput page={page}/>
              <div className={"PageCommentBox"}>
                 <   PageCommentIndex getPageComments={""} comments={props.comments} page={page} />
          </div>
          </div>
          </div>
          </div>}/>
        </div>
      </div>
     </div>)

}else{
  return (<div>Nothing here</div>)
}
    
    }

     //  if(props.page.attributes){
     
    //      let page= props.page.attributes
    //     content = page.data
    //     if (page.user.id === localStorage.getItem("currentUser")){
    //         editBtn = (<button onClick={()=>editPage(props.page)}>Edit Page</button>)
    //     }
       
    //     return(
    //          <div  >
           
    //          {/* <JoditEditor
    //         	ref={editor}
    //             value={content}
    //             config={config}
    //             // onChange={newContent => {handleOnClick(newContent)}}
    //         /> */}
    //        {/* <ListGroup.Item>
           
    //        </ListGroup.Item> */}
    //        <div variant="primary" onClick={handleShow}>
    //         <div dangerouslySetInnerHTML={{__html: page.data}}/>
    //        </div>

    //   {/* <Modal show={show} onHide={handleClose}>
    //     <Modal.Header closeButton>
    //   <h5> from {page.book.title} by  <a by href={`/users/${page.user.id}`}> {page.user.username}</a>{editBtn}
    //     </h5></Modal.Header>
    //     <div className="body">
    //     <Modal.Body>
    //     <div className="ModalBody">
    //     <div dangerouslySetInnerHTML={{__html: page.data}}/>
       
    //     </div>
    //     <PageCommentInput page={page}/>
    //     <PageCommentIndex getPageComments={(page)=>dispatch(getPageComments(page))} page={page} />
    //     </Modal.Body>
    //     </div>
    //     <Modal.Footer>
        
    //       <Button variant="secondary" onClick={handleClose}>
    //         Close
    //       </Button>
    //       <Button variant="primary" onClick={handleClose}>
    //         Save Changes
    //       </Button>
    //     </Modal.Footer>
    //   </Modal> */}
    
    //     </div>
      
    // )
    // }else

