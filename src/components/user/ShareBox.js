import React from 'react'
import {useDispatch} from 'react-redux'
import {accessBook} from '../../actions/BookActions'

function ShareBox(props){
    const dispatch = useDispatch()
    let user = props.user
    let access
    if(props.bookAccess){
        debugger
    if(props.bookAccess.access === ("view"||"edit"||"add")){
       
        debugger
        access=`can ${props.bookAccess.access}`
        }else{
        debugger
        access = "can't view"

    }
        
    }
    function selection(){

       
        return(<select onChange={(e)=>handleOnChange(e)} name="privacy" defaultValue={access}>
                <option name="view">can view</option>
                <option name="add">can add</option>
                <option name="edit">can edit</option>
                <option name="can't">can't view</option>
            </select>)
    }
    function handleOnChange(e){
        debugger
        let access = e.target.value.split(" ")[1]
        let hash ={bookId: props.bookId,access,userId: props.user.id}
    if(e.target.value!=="can't view")
        dispatch(accessBook(hash))
    }
    return(<div className="list-group-item">
    <div>
        {user.name} - {user.username}
        <br/>   
        {user.email}
    </div>
        <div>
            {selection()}
        </div>
            </div>)
}
export default ShareBox