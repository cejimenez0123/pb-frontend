import React from 'react'
import Popup from 'reactjs-popup'
import {useDispatch} from 'react-redux'
import {commentOnPageComment} from '../../actions/PageActions'
function PageCommentBox(props){
    const dispatch =useDispatch()
    let comment = props.comment
    let user = props.comment.user
    function handleOnSubmit(e){
        debugger
        e.preventDefault()
        let value = e.target.getElementsByTagName("textarea")[0].value
        let comment ={page_id: props.page.id,parent_id: props.comment.id,text: value}
        dispatch(commentOnPageComment(comment))
    }
    return(<div>
    
    <div id="pageCommentBox"><p>{comment.text}</p>from <a href={`users/${user.id}`}>@{user.username}</a>
    <Popup trigger={<button >reply</button>} position="bottom center">
    <div><form onSubmit={(e)=>handleOnSubmit(e)}><textarea></textarea><button type="submit">Submit</button></form></div>
  </Popup>
    </div></div>)
}
export default PageCommentBox