import React, { Component, useState } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {connect} from 'react-redux'
import {savePage,getPage,getAllPages} from '../actions/PageActions'
// import ConsoleButtons from '../../ConsoleButtons';

function EditorContainer (props) {
    let [currentPage] = useState()
   
   function doSetData(editor){
       debugger
        if(props.currentPage){
            editor.setData("<p>Working</p>")
           
        }
    }
   function savePage(data){
      
      props.savePage(data)
    }
    function deletePage(){

    }

        return (
            <div>
                <h1></h1>
                <button onClick={()=>savePage()}>Save</button>
                <button onClick={()=>deletePage()}>Delete</button>
            <div className="editor">
                <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Write Anything</p>"

                    onInit={ editor => {
                        doSetData(editor)
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        
                        const data = editor.getData();
                        savePage(data);
                        
                    
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

function mapDispatchToProps(dispatch){
    return{ 
      savePage: (data)=>dispatch(savePage(data)),
      getAllPages: ()=>dispatch(getAllPages()) , 
      getPage: ()=>dispatch(getPage())
    }
  }
  function mapStateToProps(state){
  console.log(state.pages.currentPage)
    return{
  
      currentPage: state.pages.currentPage
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(EditorContainer);
  
      
