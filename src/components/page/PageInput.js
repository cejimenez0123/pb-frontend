import React from 'react'
import { usePageActions} from '../../actions/PageActions'
import {useDispatch} from 'react-redux'
function PageInput(props){
    
    const bot = usePageActions()
    const dispatch = useDispatch()
   function handleOnSubmit(e){
       
       e.preventDefault()
       debugger
        const data = e.target.querySelector("input").value
    this.props.savePage(data)
   }
    return(<div>

    <form onSubmit={(e)=>handleOnSubmit(e)}> 
        <input type="text"/><input type="submit"/>
    </form>
    </div>
    )
}
export default PageInput