import React from 'react'

// import CKEditor from '@ckeditor/ckeditor5-react';
// import InlineEditor from "@ckeditor/ckeditor5-build-inline"
// let element
class BoxEditor extends React.Component{
    
//     doSetData(editor){
//         element = editor
//         debugger
//          if(this.props.currentPage){
             
//              editor.setData(this.props.currentPage.data)
            
//          }
//      }
//      titler(){
//          if(this.props.currentPage){
//              return this.props.currentPage.title
//          }
//      }
//      savePage(data){
     
//       let  title = document.querySelector("#title")
//        let id= window.location.pathname.split("/")[2]
//        debugger
//        this.props.savePage({id: id, data: data,title: title.innerText})
//      }
//      deletePage(){
 
//      }
//     render(){
//             return (
//                 <div>
//                     <h1 id="title" contentEditable="true">{this.titler()}</h1>
//                     <button onClick={()=>this.savePage(element.getData())}>Save</button>
//                     <button onClick={()=>this.deletePage()}>Delete</button>
//                 <div className="editor">
//                     <CKEditor
//                     // config={this.editorConfiguration()}
//                         editor={ InlineEditor}
//                         data="<p>Write Anything</p>"
                        
//                         onInit={ editor => {
//                             this.doSetData(editor)
//                             editor = editor
//                             // You can store the "editor" and use when it is needed.
//                             console.log( 'Editor is ready to use!', editor );
//                         } }
    
//                         onChange={ ( event, editor ) => {
                         
//                             let data = editor.getData();
//                             this.savePage(data);
    
                        
//                             console.log( { event, editor, data } );
//                         } }
//                         onBlur={ ( event, editor ) => {
//                             console.log( 'Blur.', editor );
//                             let data = editor.getData()
//                             this.savePage(data)
//                         } }
//                         onFocus={ ( event, editor ) => {
//                             console.log( 'Focus.', editor );
//                         } }
//                     />     
//                 </div>
                
//                 </div>
//             )

// }
}


export default BoxEditor