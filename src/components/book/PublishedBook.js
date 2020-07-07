import React from 
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


        if(user_id== localStorage.getItem("currentUser")){
          
            return(<div>
            <PageInput book={this.props.book}/>
            </div>)
        }
    }

   renderIf(){
       debugger 
        if(this.props.book ){
           let pages = this.props.pages.filter(page=>{
               return page.attributes.book_id == this.props.book.id
           })
            return(<div>
                <h6>{this.props.book.title} </h6>
                {this.ifEditable()}
                <PageCards pages={pages}/>
            </div>)
        }
    }
      render(){ 
         
        return(<div>
    {this.renderIf()}
        </div>)
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