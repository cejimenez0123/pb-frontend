import React from 'react'

export default function Book (props){

   function renderIf(){
        if(props.book ){
            debugger
            return(<div>
                <h6>{props.book.title} </h6>
            </div>)
        }
    }
        
        return(<div>
    {renderIf()}
        </div>)
}
