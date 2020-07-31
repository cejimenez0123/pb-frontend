import React from 'react'
import { usePageActions} from '../../actions/PageActions'
import {useDispatch} from 'react-redux'
function PageInput(props){
    
    const bot = usePageActions()
    const dispatch = useDispatch()
   function handleOnSubmit(e){
       
       e.preventDefault()
     debugger
        const value = e.target.querySelector("input").value
     let   data={data: value,bookId: props.book.id}
    dispatch(bot.savePage(data))
   }
    return(<div id={`book-${props.book.id}`} style={{display: "none"}}>

    <form onSubmit={(e)=>handleOnSubmit(e)}> 
        <input type="text"/><input type="submit"/>
    </form>
    </div>
    )
}
export default PageInput