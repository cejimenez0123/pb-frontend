import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {connect} from 'react-redux'
import {savePage,getPage,getAllPages} from '../actions/PageActions'
// import ConsoleButtons from '../../ConsoleButtons';

class EditorContainer extends Component {
    componentWillMount(){
        console.log("props",this.props)
this.props.getPage()
    }
    doSetData(editor){
       
        if(this.props.currentPage){
            editor.setData("<p>Working</p>")
           
        }
    }
    savePage(data){
      
      this.props.savePage(data)
    }
    deletePage(){

    }
	render() {
        return (
            <div>
                <h1></h1>
                <button onClick={this.savePage}>Save</button>
                <button onClick={this.deletePage}>Delete</button>
            <div className="editor">
                <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Write Anything</p>"

                    onInit={ editor => {
                        this.doSetData(editor)
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
  
      
