import React, {useState, useRef} from 'react';
import {useDispatch,connect,useStore} from 'react-redux'
import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";
import {savePage,newPage} from '../../actions/PageActions'
let page
const Editor = (props) => {
    const store = useStore()
	const editor = useRef(null)
	const [content, setContent] = useState('')
	
    let dispatch = useDispatch()
    
	const config = {
		readonly: false,
        iframe: true
     // all options from https://xdsoft.net/jodit/doc/
	}
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



    
    
    function handleOnClick(e){
    
        setContent(e)
        if(props.currentPage){
         page = {id: props.currentPage.id,data: e,bookId: props.book.id}
        }else{
            page={id: null,data:e,bookId: props.book.id}
        }
        
    }
    function handleSave(){
        
        dispatch(savePage(page))
    }
    console.log(content)
    function doSetContent(e){
        debugger
    setContent(e)
    }
   
    
	
	return (<div>
    <button onClick={()=>handleSave()}>Save</button>
 <JoditEditor
            	ref={editor}
                value={content}
                config={config}
		tabIndex={1} // tabIndex of textarea
		onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => {debounce(handleOnClick(newContent),2000)}}
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