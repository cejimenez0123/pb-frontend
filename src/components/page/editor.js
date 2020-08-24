import React, {useState, useRef} from 'react';
import {useDispatch} from 'react-redux'

import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";
import {savePage,newPage} from '../../actions/PageActions'
const Editor = ({book}) => {
    
	const editor = useRef(null)
	const [content, setContent] = useState('')
	
    let dispatch = useDispatch()
    
	const config = {
		readonly: false
     // all options from https://xdsoft.net/jodit/doc/
	}
    

    function handleOnClick(){
        debugger
        let page = {data: content,bookId: book.id}
        dispatch(savePage(page))
        
    }
    console.log(content)
    function doSetContent(e){
        debugger
    setContent(e)
    }
	
	return (<div>
    <link rel="stylesheet" href="build/jodit.min.css"/>
<script src="build/jodit.min.js"></script>
<button onClick={()=>handleOnClick()}>save</button>
            <JoditEditor
            	ref={editor}
                value={content}
                config={config}
		tabIndex={1} // tabIndex of textarea
        onChange={(e)=>{doSetContent(e)}}
		// onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                // onKeyUp={()=>dispatch(savePage(page))}
            />
        </div>
        );
}
export default Editor