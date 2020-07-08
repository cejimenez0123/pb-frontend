
import React from 'react'
import PageInput from "../page/PageInput"
import {connect } from "react-redux"
import { getPagesOfBook } from "../../actions/PageActions"
import PageCards from "../page/PageCards"
class PublishedBook extends React.Component{
    constructor(){
        super()
    }
   
    ifEditable(){

let user_id 
if(this.props.book.user_id){
    user_id = this.props.book.user_id
}else if(this.props.book.user){
    user_id = this.props.book.user.id
}


        if(user_id== localStorage.getItem("currentUser")){
          
       
        
           return (<div>
            <PageInput book={this.props.book}/>
            </div>)
            
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
            return(<div>
                <h6><a href={`http://localhost:3001/books/${this.props.book.id}`}>{this.props.book.title}</a> by <a href={`http://localhost:3001/users/${this.props.book.user.id}`}>{this.props.book.user.username}</a></h6>
                <button className="add-btn">Add</button>
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
export default connect(mapState,mapDispatch)(PublishedBook)