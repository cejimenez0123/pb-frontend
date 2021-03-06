import React, {useState,useRef} from 'react'
import JoditEditor from 'jodit-react'
import {useStore,useDispatch } from 'react-redux'
import Modal from "../modal"
import Editor from "./editor"
import DraftPage from "./DraftPage"
import {connect} from "react-redux"
import {getPageComments} from "../../actions/PageActions"
import PageCommentInput from "./PageCommentInput"
import PageCommentIndex from "./PageCommentIndex"
import FroalaEditor from 'react-froala-wysiwyg'
// import useWindowSize from "../useWindowSize"
//.jodit-toolbar__box
 function Page(props){
  const dispatch = useDispatch()
  const store = useStore()
  const [show, setShow] = useState("none")
// let [config,setConfig]=useState({imageCORSProxy: "http://127.0.0.1:3000/",imageUploadURL:"http://localhost:3000/image/upload",imageUploadRemoteUrls: false,iframe:true,events:{
//     'initialized' : function(e, editor) {
    
//       this.html.insert(content)
      
//       this.edit.off();
//   }}})
  let [size,setSize]=useState({width: 0,height: 0})
  // const [width,height]=useWindowSize()
  let content
  const editor = useRef(null)
  //
   
      function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}


  let [dimensions, setDimensions] = useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 500)

    window.addEventListener('resize', debouncedHandleResize)

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize)
    
}
  })
  //
  function editPage(page){
    let div = document.getElementsByClassName("ModalBody")[0]
  }
  
  function handleEdit(){
    
  }
  function editBtn(){

    if(props.page.user.id === localStorage.getItem("currentUser")){

      return (<Modal button={<div>Edit</div>}
      content={<DraftPage page={props.page}/>}/>)
    }else{
      return("")
    }
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
  let config
  if(dimensions.width>740){
  
  config={readonly: true,width: dimensions.width-300,iframe: true}
  }else if(dimensions.width <=740 && dimensions.width>=375){
 
  config={readonly: true,width:dimensions.width,iframe: true}}
  else{

config={readonly: true,iframe: true}
  }
  
    
  let modalContent
  
  if(props.page){

    let page = props.page
    content = page.data

    // dispatch(getPageComments(page))
      return(
        <div className="">
          <div  >
            
            <div className="page" data-id={props.id}>
           {/* <FroalaEditor
    
    config={config}
   /> */}
              <JoditEditor
            	ref={editor}
              value={content}
              config={config}
                // onChange={newContent => {handleOnClick(newContent)}}
            />
            <div className="pageBtns">
           <Modal 
           button ={ <button variant="primary" onFocus={()=>getPageComments(props.page.id)}  >Comment</button>} content={
              <div>
                  <div className="pageHeader" > <div><a href={`/books/${page.book.id}`}>{page.book.title}</a> by 
                   <a href={`/users/${page.user.id}`}> 
                    {page.user.username}
                   </a></div>{editBtn()}
                  </div>
   {/* <FroalaEditor
    
    config={config}
   /> */}
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
                 <   PageCommentIndex  getPageComments={(id)=>dispatch(getPageComments(id))}comments={props.comments} page={page} />
          </div>
          </div>
          
          </div>
          </div>}/>

          </div>
        </div>
      </div>
     </div>)

}else{
  return (<div>Nothing here</div>)
}
    
}

function mapState(state){

  return{
    comments: state.pages.pageCommentsInView
  }
}
export default connect(mapState)(Page)
