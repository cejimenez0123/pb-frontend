import React, { Component, useState } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {connect} from 'react-redux'
import {savePage,getPage,getAllPages} from '../actions/PageActions'

// import ConsoleButtons from '../../ConsoleButtons';

class EditorContainer extends React.Component {
    

   doSetData(editor){
        if(this.props.currentPage){
            editor.setData("<p>Working</p>")
           
        }
    }
    titler(){
        if(this.props.currentPage){
            return this.props.currentPage.title
        }
    }
    savePage(data){
     let  title = document.querySelector("#title")
      let id= window.location.pathname.split("/")[2]
      this.props.savePage({id, data,title: title.innerText})
    }
    deletePage(){

    }
render(){
        return (
            <div>
                <h1 id="title" contentEditable="true">{this.titler()}</h1>
                <button onClick={()=>this.savePage()}>Save</button>
                <button onClick={()=>this.deletePage()}>Delete</button>
            <div className="editor">
                <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Write Anything</p>"
                    config={ {plugins: []}}
                    onInit={ editor => {
                        this.doSetData(editor)
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        
                        const data = editor.getData();
                        this.savePage(data);
                        
                    
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
        );}
}

function mapDispatchToProps(dispatch){
    return{ 
      savePage: (data)=>dispatch(savePage(data)),
      getAllPages: ()=>dispatch(getAllPages()) , 
      getPage: ()=>dispatch(getPage())
    }
  }
  function mapStateToProps(state){
  
    return{
  
      currentPage: state.pages.currentPage
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(EditorContainer);
  
      
