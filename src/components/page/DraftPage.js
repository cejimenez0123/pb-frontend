import React,{useState,useRef} from 'react'
import {useDispatch,useStore} from "react-redux"
import JoditEditor from "jodit-react"
import {publishPage,deletePage,updatePage} from "../../actions/PageActions"
// let config ={readonly: true,width: 900,iframe: true}
let page
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
   console.log("PGGEE",props.page)
   function handleSave(){
     debugger
  page=   {id: props.page.id,data:content,bookId: props.book.id}
     
     
     dispatch(updatePage(page))
   }
  function changeReadOnly(e){
      debugger
      setClass("editor")
      setConfig({readonly: false,width: 900,iframe: true})
    
      
  }
  function handleDeletePage(){
    dispatch(deletePage(page))
  }
  function pubPage(){
    page = {...page,status: "published"}
    dispatch(publishPage(page))
  }
  const handleClose = () => setShow("none");
  const handleShow = () => setShow("block");
 function handleOnClick(data){
   content = data
 }
  let editBtn = null
  if(props.book){
         
            page={id: props.page.id,data:content,bookId: props.book.id}
        } 
  if(props.page){
    let page = {...props.page}
    content = props.page.data
    console.log(config)
      let html =(
        <div >
          <div >
            <div  className={classNom} style={{height: "0px"}}>
              <JoditEditor
            	ref={editor}
              value={content}
              config={config}
                onChange={newContent => {handleOnClick(newContent)}}
            />
           <button onClick={(e)=>changeReadOnly(e)}>Edit Page</button> 
           <button onClick={()=>handleSave()}>Save</button>
           <button onClick={(e)=>pubPage()}>Publish</button>
           <button onClick={()=>handleDeletePage()}>Delete</button>
           <button variant="primary"  onClick={(e)=>handleCommentClick(e)} >Comment</button>
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