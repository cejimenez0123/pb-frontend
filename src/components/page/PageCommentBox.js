import React from 'react'

function PageCommentBox(props){
    debugger
    let comment = props.comment.text
    let user = props.comment.user
    return(<div><p>{comment}</p></div>)
}
export default PageCommentBox