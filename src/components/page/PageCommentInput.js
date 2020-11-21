import React from 'react'
import {useDispatch} from 'react-redux'
import {commentOnPage} from '../../actions/PageActions'

function PageCommentInput(props){
    const dispatch = useDispatch()

    function handleOnSubmit(e){
     e.preventDefault()
      let text=   e.target.getElementsByTagName("textarea")[0].value
        dispatch(commentOnPage({page_id: props.page.id,text: text}))

    }

    return(<div>
    <form onSubmit={(e)=>handleOnSubmit(e)}>
    <textarea className="comTextarea" ></textarea>
    <br/>
    <button type="submit">Comment</button>
    </form>
    </div>)
}
export default PageCommentInput