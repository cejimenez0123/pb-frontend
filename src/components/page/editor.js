import React from 'react'
class editor extends React.Component{
componentWillMount(){
    debugger
    if(this.props.currentPage){
        debugger
        
    }
}
savePage(){
  
}
deletePage(){

}
render() {
    return (
        <div>
            <button onClick={this.savePage}>Save</button>
            <button onClick={this.deletePage}>Delete</button>
        <div className="editor">
            <CKEditor
                editor={ ClassicEditor }
                data="<p>Write Anything</p>"

                onInit={ editor => {
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
}