import React from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { connect } from 'react-redux';
import {savePage,deletePage} from "../../actions/PageActions"

let element
class Editor extends React.Component{
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
}
componentDidUpdate(){
    if(this.props.page){
        debugger
        
    element.setData(this.props.page.attributes.data)
}
}
    

   doSetData(editor){
       element = editor
       element.config={plugins: []}
        if(this.props.currentPage){
            
            let page = localStorage.getItem("currentPage")
            debugger
            document.querySelector("#title").innerHTML = this.props.currentPage.title
            editor.setData(this.props.currentPage.data)
           
        }
    }
    titler(){
        if(this.props.page){
        }
    }


    savePage(data){
        debugger
        let id= this.props.page.id
      
     let  title = document.querySelector(`#title-${id}`)
     this.props.savePage({id: id, data: data,title: title})
    }
    deletePage(){
        this.props.deletePage(this.props.page.id)
    }
render(){
    return (
        <div>
            <button onClick={()=>savePage()}>Save</button>
            <button onClick={()=>deletePage()}>Delete</button>
        <div className="editor">
            <CKEditor id="editor"
            config={{}}
                editor={ ClassicEditor }
                data="<p>Write Anything</p>"

                onInit={ editor => {
                    element = editor
                    if(this.props.page && this.props.page.data !==null){
                        debugger
                        element.setData(this.props.page.data)
                    }
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor is ready to use!', editor );
                } }
                onChange={ ( event, editor ) => {
                    
                    const data = editor.getData();
                    this.savePage(data);
                    
                
                    console.log( { event, editor} );
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
export default connect(null,mapDispatchToProps)(Editor)

function mapDispatchToProps(dispatch){
    return{ 
      savePage: (data)=>dispatch(savePage(data)),
     deletePage:(id)=>dispatch(deletePage(id))
    
    }
  }