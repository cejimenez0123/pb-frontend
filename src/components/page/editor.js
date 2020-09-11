import React, {useState, useRef} from 'react';
import {useDispatch,connect,useStore} from 'react-redux'
import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";
import {savePage,publishPage} from '../../actions/PageActions'
let page
const Editor = (props) => {
    const store = useStore()
	const editor = useRef(null)
    let [show,setShow]= useState("none")
	let [content, setContent] = useState(localStorage.getItem("workingPage"))
	
    let dispatch = useDispatch()
    
	
    function debounce(func, wait, immediate) {
        var timeout;

            return function executedFunction() {
                 var context = this;
                var args = arguments;
	    
                var later = function() {
             timeout = null;
        if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
	
    clearTimeout(timeout);

    timeout = setTimeout(later, wait);
	
    if (callNow) func.apply(context, args);
  };
};
   

    if(props.currentPage){
         
         page = {id: props.currentPage.id,data: props.currentPage.data,bookId: props.book.id}
        }else if(props.book){
         
            page={id: null,data:content,bookId: props.book.id}
        }
    if(!props.currentPage){
    
    }
    function handleOnClick(e){
 
        if(props.currentPage){
        
         page = {id: props.currentPage.id,data: e,bookId: props.book.id}
        }else if(props.book){
            page={id: null,data:e,bookId: props.book.id}
        }
        
    }
    
    
    function handleSave(){
        debugger
        dispatch(savePage(page))
        props.handleTruthyClose(page.data)
    }
    console.log(content)
    function doSetContent(e){
       
    setContent(e)
    }
   
    const config = {
        width: 815,
        height: "auto",
		readonly: false,
        iframe: true

	}
    // function handleLoad(){
    //     debugger
    //     if(localStorage.getItem("workingPage").length !==0){
    //     setContent(localStorage.getItem("workingPage"))
    //     }
    // }
    function handlePublish(){
        dispatch(publishPage(page))
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
            <div id={`modal-${page.id}`} onClick={(e)=>handleClose()} style={{width: "100%",display: show}} class="modal">
                <div   class="modal-content">
                  
                  <div className={"modalInfo"}>
                  <button onClick={handleSave}>Save</button> <button onClick={()=>props.handleTruthyClose(page.data)}>Don't Save</button><button>Cancel</button>
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