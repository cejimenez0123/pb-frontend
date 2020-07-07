import React from 'react'
import PageInput from "../page/PageInput"
import {connect } from "react-redux"
import { getPagesOfBook } from "../../actions/PageActions"
import PageCards from "../page/PageCards"
class Book extends React.Component{
    constructor(){
        super()
    }
   
    ifEditable(){

let user_id 
if(this.props.book.user_id){
    user_id = this.props.book.user_id
}
if(this.props.book.user){
    user_id = this.props.book.user.id
}


        if(user_id== localStorage.getItem("currentUser")){
          
            let pageInput = (
            
            <div>
            <PageInput book={this.props.book}/>
            </div>)
           let  html=(<div>

            </div>)
            return html
        }
    }

   renderIf(){
      
        
    }
      render(){ 
         let pages = []
        if(this.props.book ){
           pages = this.props.pages.filter(page=>{
               return page.attributes.book_id == this.props.book.id
           })
           debugger
            return(<div>
                <h6>{this.props.book.title} by {this.props.book.user.username} </h6>
                <button>Add</button>
                {this.ifEditable()}
                <PageCards pages={pages}/>
            </div>)
        }
      }
}
function mapDispatch(dispatch){
    return{getPagesOfBook:(id)=>dispatch()}
}
function mapState(state){
    return{
        pages: state.pages.pages
    }
}
export default connect(mapState,mapDispatch)(Book)

