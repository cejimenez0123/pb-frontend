import React from 'react'
import {getPageComments} from "../../actions/PageActions"
import PageCommentBox from "./PageCommentBox"
import {useStore,useDispatch} from 'react-redux'
function PageCommentIndex(props){
    const dispatch = useDispatch()
    const store = useStore()
    dispatch(getPageComments(props.page.id))
    let comments = store.getState().pages.pageCommentsInView
   comments.map(comment=>{
       return (<PageCommentBox comment={comment.attributes}/>)
    })
   
    return(<div>{comments}</div>)
}

export default PageCommentIndex