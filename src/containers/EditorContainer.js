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
import {SET_CURRENT_USER} from "../actions/UserActions"
import NavbarContainer from "./NavbarContainer"
// import ConsoleButtons from '../../ConsoleButtons';
let element
class EditorContainer extends React.Component {
    constructor(){
        super()
        this.state={
            id: "",
            title: "",
            data: "",
            user: ""
        }
    }
    
componentDidMount(){

debugger
this.props.getPage()
this.props.setCurrentUser()
console.log(this.state)
}
componentDidUpdate(){
    if(this.props.page){
        debugger
        
    element.setData(this.props.page.attributes.data)
}
}
    

   doSetData(editor){
       element = editor
       
        if(this.props.currentPage){
            
            let page = localStorage.getItem("currentPage")
            debugger
            document.querySelector("#title").innerHTML = this.props.currentPage.title
            editor.setData(this.props.currentPage.data)
           
        }
    }
    titler(){
        if(this.props.currentPage){
        }
    }


    savePage(data){
  
     let  title = document.querySelector("#title")
      let id= window.location.pathname.split("/")[2]
      this.props.savePage({id: id, data: data,title: title.innerText})
    }
    deletePage(){

    }
render(){

        return (
            
            <div>
                <NavbarContainer loggedIn={this.props.loggedIn }/>
        <h1 id="title" onLoad={this.titler()} contentEditable="true"></h1>
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
                    onChange={(event,editor)=>{this.savePage(editor.getData())}}
                    onChange={ ( event, editor ) => {
                     
                        

                    
                        console.log( { event, editor } );
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
      getPage: ()=>dispatch(getPage()),
      setCurrentUser: ()=>dispatch(SET_CURRENT_USER())
    }
  }
  function mapStateToProps(state){
  
    return{
  
      currentPage: state.pages.currentPage
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(EditorContainer);
  
      
