import React, {useState,useRef} from 'react'
import JoditEditor from 'jodit-react'
import {useStore,useDispatch } from 'react-redux'
import Modal from "../modal"
import Editor from "./editor"
import DraftPage from "./DraftPage"
import {connect} from "react-redux"
import {getPageComments} from "../../actions/PageActions"
import {likePage} from "../../actions/LikeActions"
import PageCommentInput from "./PageCommentInput"
import PageCommentIndex from "./PageCommentIndex"
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins/image.min.js'
import FroalaEditor from 'react-froala-wysiwyg';
import Popover from '@material-ui/core/popover'
import Typography from '@material-ui/core/typography'
import { makeStyles } from '@material-ui/core/styles';
// Import all Froala Editor plugins;
import 'froala-editor/js/plugins.pkgd.min.js';
// import useWindowSize from "../useWindowSize"
//.jodit-toolbar__box
const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

function PageCard(props){
  const dispatch = useDispatch()
  const store = useStore()
  const [show, setShow] = useState("none")
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

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
  function YeaNahBtn(){
      let like 
     
    if(Object.keys(props.currentUser).length !== 0){
      if(props.likes){
        like= props.likes.find(like=>{return like.attributes.page.id === props.page.id})}
        if(like) {
          switch(like.attributes.score){
            case 1:
            return(<div className="likeBtns "><button className={"invert"}onClick={(e)=>handleLike(e)}>Yea</button><button onClick={(e)=>handleLike(e)}>Nah</button>
                  </div>)
            case -1:
            return(<div className="likeBtns "><button onClick={(e)=>handleLike(e)}>Yea</button><button className={"invert"}onClick={(e)=>handleLike(e)}>Nah</button></div>)
          }
        }else{
          return (<div className="likeBtns"><button onClick={(e)=>handleLike(e)}>Yea</button><button onClick={(e)=>handleLike(e)}>Nah</button>
    </div>)}}else{
   
      return(
      <div>
     <div class="popover__wrapper">

    <div className="likeBtns "><button>Yea</button><button >Nah</button>
                  </div>

  <div class="popover__content">
    <p>Can't Yea or Nah without Log In</p>
</div>
</div>
    </div>)
    }
  }
  function handleLike(e){
    let text = e.target.textContent
if(props.currentUser){
    if(text=="Yea"){
dispatch(likePage({pageId: props.page.id,score:1}))

    }else if(text=="Nah"){
dispatch(likePage({pageId: props.page.id,score:-1}))
    }
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
  
  config={readonly: true,width: 700,iframe: true}
  }else if(dimensions.width <=740 && dimensions.width>=375){
 
  config={readonly: true,width:dimensions.width,iframe: true}}
  else if(dimensions.width <=375){

config={readonly: true,width:375,iframe: true}
  }
  
    
  let modalContent
  
  if(props.page){

    let page = props.page
    content = page.data

    // dispatch(getPageComments(page))
      return(
        <div className="">
          <div  >
            <div className="page">
              <JoditEditor
            	ref={editor}
              value={content}
              config={config}
                // onChange={newContent => {handleOnClick(newContent)}}
            />
            <div className="pageBtns">
          {YeaNahBtn()} <Modal 
           button ={ <button variant="primary" onFocus={()=>getPageComments(props.page.id)}  >Comment</button>} content={
              <div>
                  <div className="pageHeader" > <div><a href={`/books/${page.book.id}`}>{page.book.title}</a> by 
                   <a href={`/users/${page.user.id}`}> 
                    {page.user.username}
                   </a></div>{editBtn()}
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
    currentUser: state.users.currentUser,
    comments: state.pages.pageCommentsInView,
    userLikes: state.users.userLikes
  }
}
export default connect(mapState)(PageCard)