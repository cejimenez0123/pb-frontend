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
   
     
    renderIndex(){
        if (this.props.comments.length > 0){
       
return this.props.comments.map((comment,i)=>{
     
       return (<PageCommentBox page={this.props.page} key={i} comment={comment.attributes}/>)
       
    })
     }else{
        return "no comments"
    }}
    
   render(){
    return(<div><ul>
    {this.renderIndex()}
    </ul></div>
    
    )}
}

function mapStateToProps(state){

    return{comments: state.pages.pageCommentsInView}
}

export default connect(mapStateToProps,null)(PageCommentIndex)