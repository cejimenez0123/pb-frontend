import React, { Component, useState } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials'
// import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
// import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
// import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
// import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
// import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
// import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
// import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
// import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
// import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage'
// import RealTimeCollaborativeEditing from '@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativeediting';
// import RealTimeCollaborativeComments from '@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativecomments';
// import RealTimeCollaborativeTrackChanges from '@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativetrackchanges';

// The following plugin enables users presence list and is optional.
// You do not need to import it if you do not want to integrate it.
// import PresenceList from '@ckeditor/ckeditor5-real-time-collaboration/src/presencelist';

import {connect} from 'react-redux'
import {savePage,getPage,getAllPages} from '../actions/PageActions'

// import ConsoleButtons from '../../ConsoleButtons';
let element
class EditorContainer extends React.Component {
    
componentDidMount(){
 

}
// editorConfiguration = ()=>{
//     return{
//     plugins: [ Essentials, Bold, Italic, Paragraph,Strikethrough,Code,Subscript,Superscript,Underline],
//     toolbar: [ 'bold', 'italic','imageUpload','code','underline','striketrough','subscript','superscript' ]}
// }

   doSetData(editor){
       element = editor
       debugger
        if(this.props.currentPage){
            
            editor.setData(this.props.currentPage.data)
           
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
      debugger
      this.props.savePage({id: id, data: data,title: title.innerText})
    }
    deletePage(){

    }
render(){
        return (
            <div>
                <h1 id="title" contentEditable="true">{this.titler()}</h1>
                <button onClick={()=>this.savePage(element.getData())}>Save</button>
                <button onClick={()=>this.deletePage()}>Delete</button>
            <div className="editor">
                <CKEditor
                // config={this.editorConfiguration()}
                    editor={ ClassicEditor }
                    data="<p>Write Anything</p>"
                    
                    onInit={ editor => {
                        this.doSetData(editor)
                        editor = editor
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }

                    onChange={ ( event, editor ) => {
                     
                        let data = editor.getData();
                        this.savePage(data);

                    
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                        let data = editor.getData()
                        this.savePage(data)
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
  
      
