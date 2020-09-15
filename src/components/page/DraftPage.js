import React,{useState,useRef} from 'react'
import {useDispatch,useStore} from "react-redux"
import JoditEditor from "jodit-react"
// let config ={readonly: true,width: 900,iframe: true}
function DraftPage(props){
const dispatch = useDispatch()
  const store = useStore()
  const [show, setShow] = useState("none")
  let [config,setConfig]=useState({readonly: true,width: 900,iframe: true})
  let [classNom,setClass]=useState("page")
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
  function changeReadOnly(e){
      debugger
      setConfig({readonly: false,width: 900,iframe: true})
    setClass("draftPage")
      
  }
  const handleClose = () => setShow("none");
  const handleShow = () => setShow("block");
 
  let editBtn = null
    
  if(props.page){
    let page = props.page
    content = page.data
    console.log(config)
      let html =(
        <div >
          <div >
            <div  className={classNom} style={{height: "0px"}}>
              <JoditEditor
            	ref={editor}
              value={content}
              config={config}
                // onChange={newContent => {handleOnClick(newContent)}}
            />
           <button onClick={(e)=>changeReadOnly(e)}>Edit Book</button> <button variant="primary"  onClick={(e)=>handleCommentClick(e)} >Comment</button>
              {/* <div id={`modal-${page.id}`} onClick={()=>handleShow()} style={{width: "100%",display: show}} class="modal">
                <div   class="modal-content">
                  <span  class="close">&times;</span>
                  <div className={"modalInfo"}>{page.book.title} by 
                   <a by href={`/users/${page.user.id}`}> 
                    {page.user.username}
                   </a>
                  </div>{editBtn}

                 <JoditEditor
                 	ref={editor}
                  value={content}
                  config={config}
                // onChange={newContent => {handleOnClick(newContent)}}
                />
                <PageCommentInput page={page}/>
              <div className={"PageCommentBox"}>
                 <   PageCommentIndex getPageComments={(page)=>dispatch(getPageComments(page))} page={page} />
              </div>
            </div>
          </div> */}
        </div>
      </div>
     </div>)
   
     return html

}else{
  return (<div>Nothing here</div>)
}
    
    }

export default DraftPage