import React from 'react'
import PageInput from "../page/PageInput"
export default class Book extends React.Component{
    constructor(){
        super()
        this.state={}
    }
    ifEditable(){
      debugger
        if(this.props.book.user_id === localStorage.getItem("currentUser")){
            return(<div>
            <PageInput book={this.props.book}/>
            </div>)
        }
    }

   renderIf(){
        if(this.props.book ){
           
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
