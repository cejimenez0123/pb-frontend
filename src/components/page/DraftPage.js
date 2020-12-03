import React,{useState,useRef} from 'react'
import {useDispatch,useStore} from "react-redux"

import Modal from "../modal"
import JoditEditor from "jodit-react"
import Editor from "../page/editor"
import {getPagesOfBook,publishPage,deletePage,updatePage,getDraftsOfBook} from "../../actions/PageActions"
// let config ={readonly: true,width: 900,iframe: true}
let page
function DraftPage(props){
const dispatch = useDispatch()
  const store = useStore()
 
  const [show, setShow] = useState("none")
  let [config,setConfig]=useState({readonly: true,width: 700,minHeight: 400,iframe: true})
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
   
       e.target.style.display="none"

     }
   }

   function handleSave(e){
     
 let status =e.target.parentElement.querySelector("#status").value
   
  page=   {id: props.page.id,data:content,bookId: props.page.book.id,status: status }
     
     
     dispatch(updatePage(page))
     if(window.location.pathname.includes("drafts")){
     dispatch(getDraftsOfBook(props.page.book.id))
     }else if(window.location.pathname.includes("books") && !window.location.pathname.includes("drafts")){
       dispatch(getPagesOfBook(props.page.book.id))
     }
   }
  function changeReadOnly(e){
      debugger
      setClass("editor")
      setConfig({readonly: false,width: 700,iframe: true,minHeight:400})
    
      
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

 function handleOnBlur(){
   setClass("")
   setConfig({readonly: true,width: 700,iframe: true,minHeight:400})
 }
  let editBtn = null
  if(props.book){
         
            page={id: props.page.id,data:content,bookId: props.book.id,status: props.page.status}
        } 
  if(props.page){
    let page = {...props.page}
    content = props.page.data

      let html =(
        <div className="draftPage">
          <div >
          <div>
            <div  className={classNom} >
              <JoditEditor
              onBlur={handleOnBlur}
            	ref={editor}
              value={content}
              config={config}
                onChange={newContent => {handleOnClick(newContent)}}
            />
          <div className="">
          <button className="rajah"onClick={(e)=>changeReadOnly(e)}>Edit Page</button>
         { // <Modal button={ } content={ 
          // <JoditEditor
            
          //   	ref={editor}
          //     value={content}
          //     config={config}
          //       onChange={newContent => {handleOnClick(newContent)}}
          //   />}/> 
  }
           <button className="green" onClick={(e)=>handleSave(e)}>Save</button>
          <select id="status" defaultValue={props.page.status}>
            <option value="draft">Draft</option>
            <option value="published">Publish</option>
          </select>
           <button className="blue" onClick={()=>handleDeletePage()}>Delete</button>
          </div>
              
        </div>
        </div>
      </div>
     </div>)
   
     return html

}else{
  return (<div>Nothing here</div>)
}
    
    }

export default DraftPage