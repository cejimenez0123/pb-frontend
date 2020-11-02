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
  let [config,setConfig]=useState({readonly: true,width: 900,minHeight: 400,iframe: true})
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
     
    let status= document.querySelector("#status")
     debugger
  page=   {id: props.page.id,data:content,bookId: props.page.book.id,status: status.value }
     
     
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
         
            page={id: props.page.id,data:content,bookId: props.book.id,status: props.page.status}
        } 
  if(props.page){
    let page = {...props.page}
    content = props.page.data
  
    console.log(config)
      let html =(
        <div className="draftPage">
          <div >
            <div  className={classNom} style={{height: "0px"}}>
              <JoditEditor
            	ref={editor}
              value={content}
              config={config}
                onChange={newContent => {handleOnClick(newContent)}}
            />
          <div className="draftPageBtns">
           <button className="rajah"onClick={(e)=>changeReadOnly(e)}>Edit Page</button> 
           <button classname="green"onClick={()=>handleSave()}>Save</button>
          <select id="status" defaultValue={props.page.status}>
            <option value="draft">Draft</option>
            <option value="published">Publish</option>
          </select>
           <button className="blue" onClick={()=>handleDeletePage()}>Delete</button>
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