import React from 'react'
import {useDispatch} from 'react-redux'
import {accessBook} from '../../actions/BookActions'

function ShareBox({user,bookId}){
    const dispatch = useDispatch()
    function handleOnChange(e){
        debugger
        let access = e.target.name
        let hash ={bookId,access,userId: user.id}
    if(access!=="can't")
        dispatch(accessBook(hash))
    }
    return(<div className="list-group-item">
    <div>
        {user.name} - {user.username}
        <br/>   
        {user.email}
    </div>
        <div>
            <select onChange={(e)=>handleOnChange(e)} name="privacy" defaultValue="can't view">
                <option name="view">can view</option>
                <option name="add">can add</option>
                <option name="edit">can edit</option>
                <option name="can't">can't view</option>
            </select>
        </div>
            </div>)
}
export default ShareBox