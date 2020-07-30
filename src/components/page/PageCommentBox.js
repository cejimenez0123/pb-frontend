import React from 'react'
import Popup from 'reactjs-popup'

import {useDispatch,useStore} from 'react-redux'
import {commentOnPageComment} from '../../actions/PageActions'
function PageCommentBox(props){
    const store = useStore()
    let users = store.getState().users.users
    const dispatch =useDispatch()
    let comment
     let user 
    if(props.comment.self){
        debugger
    comment = props.comment.self

   
    }else{
        comment=props.comment
       
  
    }
    
 user = users.find(t=>{

   return t.id ==  comment.user_id
   })

   if(user){user=user.attributes}

    
   
 let  renderChildren = null
  if(props.comment.children && props.comment.children.length>0){
    renderChildren=  props.comment.children.map((x,i)=>{

         return (<li><PageCommentBox key={i} comment={x} page={props.page}/></li>)
      })

  }
    function handleOnSubmit(e){
        
        e.preventDefault()
        let value = e.target.getElementsByTagName("textarea")[0].value
  debugger
        let obj ={page_id: props.page.id,parent_id: comment.id,text: value}
        dispatch(commentOnPageComment(obj))
    }
    debugger
    return(<div>
     <div ><li><p>{comment.text}</p>from <a href={`/users/${user.id}`}>@{user.username}</a>
    <Popup trigger={<button >reply</button>} position="bottom center">
    <div><form onSubmit={(e)=>handleOnSubmit(e)}><textarea></textarea><button type="submit">Submit</button></form></div>
  </Popup></li>
    <ul>
    {renderChildren}
    </ul>
    </div>
    </div>)
}
export default PageCommentBox