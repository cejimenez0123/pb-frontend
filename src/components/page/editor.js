import React, {useState, useRef,useEffect} from 'react';
import {useDispatch,connect,useStore} from 'react-redux'
// import 'jodit';
// import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";
import {savePage,publishPage} from '../../actions/PageActions'
let page
const Editor = (props) => {
    const store = useStore()
	const editor = useRef(null)
    let [show,setShow]= useState("none")
	let [config,setConfig]=useState({
        width: 700,
        height: "auto",
		readonly: false,
        iframe: true

	})
    let [text,setText]=useState("")
    
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
    let dispatch = useDispatch()

    // let [content,setContent]=useState(this.props.currentPage)
	let content =""

function removeEditor(){
    props.removeEditor()
}

    if(props.currentPage){
        debugger
        console.log("SFFS",props.currentPage)
         content=props.currentPage.data
         page = {id: props.currentPage.id,data: props.currentPage.data,bookId: props.book.id}
        }else if(props.book){
         
            page={id: null,data:content,bookId: props.book.id}
        }
    if(!props.currentPage){
    
    }
//     function handleOnClick(e){
 
//  debugger
//         if(props.currentPage){
        
//          page = {id: props.currentPage.id,data: e,bookId: props.book.id,status: "draft"}
//         }else if(props.book){
//             page={id: null,data:e,bookId: props.book.id}
//         }else{
//             page={id: null,data:e,bookId: null}
//         }
        
//     }
    function handleOnClick(data){
 
       setText(data)
   content = data
   page= {...page,data: data}
 }
    
    function handleSave(){
        debugger
        page= {...page,data:text,status: "draft"}
        content=""
        dispatch({type:"SHOW_EDITOR",show: "none"})
        dispatch(savePage(page))
        props.handleTruthyClose(page.data)
        
        
        
    }
   

   
    

    function handlePublish(){
        page = {...page,data:text,status:"published"}
        debugger
        dispatch({type:"SHOW_EDITOR",show: "none"})
        dispatch(publishPage(page))
         
        props.handleTruthyClose(page.data)
        
    }
   function handleTruthy(){
       
       props.handleTruthyClose(page.data)
    }
    

    function showModal(){
        setShow("block")
    }

    const handleClose=()=>setShow("none")
	
	return (<div style={{textAlign: "center",margin: "auto"}}className="editor">
    <button onClick={()=>handlePublish()}>Publish</button><span  onClick={()=>showModal()} class="close">&times;</span>
 <JoditEditor
            	ref={editor}
                value={content}
                config={config}
                
		// tabIndex={1} // tabIndex of textarea
		// onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => {handleOnClick(newContent)}}
            />
            <div id={`modal-${page.id}`} onClick={(e)=>handleClose()} style={{marginTop:"15%",width: "100%",display: show}} class="modal">
                <div   class="modal-content">
                  
                  <div className={"modalInfo"}>
                  <button onClick={()=>handleSave()}>Save</button> <button onClick={()=>props.handleTruthyClose(page.data)}>Don't Save</button><button>Cancel</button>
</div>
                  </div>
              </div>
        </div>
        );
}
const mapState = (state)=>{
    return{
        currentPage: state.pages.currentPage
    }
}
export default connect(mapState)(Editor)