import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {savePage} from '../actions/PageActions'
// import ConsoleButtons from '../../ConsoleButtons';

export default class EditorContainer extends Component {
    constructor(){
        super()
    }


	render() {
        return (
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
        );
	}
}
      
