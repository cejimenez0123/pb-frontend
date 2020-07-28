import React ,{useState,setUpdate,useEffect} from 'react'
import {connect} from 'react-redux'
import {getPageComments} from "../../actions/PageActions"
import PageCommentBox from "./PageCommentBox"
import {useStore,useDispatch} from 'react-redux'
let html = null
class PageCommentIndex extends React.Component{
   
    componentDidMount(){
        this.props.getPageComments(this.props.page.id)
    }
    componentDidUpdate(){
         debugger
    if (this.props.comments.length > 0){
        debugger
 html=  this.props.comments.map((comment,i)=>{
     
       return (<PageCommentBox key={i} comment={comment.attributes}/>)
    })}else{
        html = "no comments"
    }}
   render(){
    return(<div><ul>
    {html}
    </ul></div>)}
}

function mapStateToProps(state){

    return{comments: state.pages.pageCommentsInView}
}

export default connect(mapStateToProps,null)(PageCommentIndex)