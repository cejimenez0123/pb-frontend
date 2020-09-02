import React, {useState, useRef} from 'react';
import {useDispatch,connect,useStore} from 'react-redux'
import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";
import {savePage} from '../../actions/PageActions'
let page
const Editor = (props) => {
    const store = useStore()
	const editor = useRef(null)
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
    }
    console.log(content)
    function doSetContent(e){
       
    setContent(e)
    }
   
    const config = {
        width: 900,
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
	
	return (<div className="editor">
    <button onClick={()=>handleSave()}>Save</button>
 <JoditEditor
            	ref={editor}
                value={content}
                config={config}
                
		// tabIndex={1} // tabIndex of textarea
		// onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => {handleOnClick(newContent)}}
            />
        </div>
        );
}
const mapState = (state)=>{
    return{
        currentPage: state.pages.currentPage
    }
}
export default connect(mapState)(Editor)