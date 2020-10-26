import React from 'react'
import {connect} from 'react-redux'
import {getPageComments} from "../../actions/PageActions"
import PageCommentBox from "./PageCommentBox"
import {useStore,useDispatch} from 'react-redux'
let html = null
class PageCommentIndex extends React.Component{
   
   
   
     
    renderIndex(){
        let num = 0
     if(this.props.comments && this.props.comments.length > 0) {  
    
    return this.props.comments.map((comment,i)=>{
    
       return (<PageCommentBox page={this.props.page} key={i} comment={comment}/>)

    })
     }else{
        return(
        <div className="noComments"> 
        <h3 style={{display: "inline"}} >0 comments</h3>
        </div>)
    }}

    
   render(){
    return(<div className="pageCommentIndex">
    <div className="comment-section">
    {this.renderIndex()}
    </div>
    </div>
    
    )}
}
function countComments(comments){
    let num = comments.length

    comments.forEach(com=>{
       num+= com.comments.length
       if(com.comments.length >0){
           countComments(com.comments)
       }
    })
    return num
}
function mapStateToProps(state){

    return{}
}


export default connect(mapStateToProps,null)(PageCommentIndex)