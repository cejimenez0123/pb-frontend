import React from 'react'
import PageInput from "../page/PageInput"
export default class Book extends React.Component{
    constructor(){
        super()
        this.state={}
    }
    ifEditable(){
        if(this.props.book.userId === localStorage.getItem("currentUser")){
            return(<div>
            <PageInput/>
            </div>)
        }
    }

   renderIf(){
        if(this.props.book ){
            debugger
            return(<div>
                <h6>{this.props.book.title} </h6>
                {this.ifEditable()}
            </div>)
        }
    }
      render(){  
        return(<div>
    {this.renderIf()}
        </div>)
      }
}
