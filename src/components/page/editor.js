import React from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const Editor=(props)=>{
    let page 
    if(props.currentPage){
        debugger
        
    }
function savePage(){
  debugger
}
function deletePage(){

}

    return (
        <div>
            <button onClick={()=>savePage()}>Save</button>
            <button onClick={()=>deletePage()}>Delete</button>
        <div className="editor">
            <CKEditor id="editor"
                editor={ ClassicEditor }
                data="<p>Write Anything</p>"

                onInit={ editor => {
                    page = editor
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor is ready to use!', editor );
                } }
                onChange={ ( event, editor ) => {
                    
                    const data = editor.getData();
                    savePage();
                    
                
                    console.log( { event, editor, data } );
                } }
                onBlur={ ( event, editor ) => {
                    console.log( 'Blur.', editor );
                } }
                onFocus={ ( event, editor ) => {
                    console.log( 'Focus.', editor );
                } }
            />     
        </div>
        
        </div>
    );
}
export default Editor
