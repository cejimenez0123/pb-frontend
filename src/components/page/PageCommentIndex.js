import React from 'react'
import {connect} from 'react-redux'
import {getPageComments} from "../../actions/PageActions"
import PageCommentBox from "./PageCommentBox"
import {useStore,useDispatch} from 'react-redux'
let html = null
class PageCommentIndex extends React.Component{
   
   
   
     
    renderIndex(){
        
        if (this.props.comments && this.props.comments.length > 0){

    
    return this.props.comments.map((comment,i)=>{
    
       return (<PageCommentBox page={this.props.page} key={i} comment={comment}/>)

    })
     }else{
        return(
        <div className="noComments"> 
        <h3>"no comments"</h3>
        </div>)
    }}

    
   render(){
    return(<div className="pageCommentIndex">
    {this.renderIndex()}
    </div>
    
    )}
}

function mapStateToProps(state){

    return{}
}

export default connect(mapStateToProps,null)(PageCommentIndex)