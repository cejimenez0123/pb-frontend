import React from 'react'
import {useDispatch} from 'react-redux'
import {accessBook} from '../../actions/BookActions'

function ShareBox({user,access,bookId}){
    const dispatch = useDispatch()
    function handleOnChange(e){
        debugger
        let val = e.target.value
        let hash ={bookId,access,userId: user.id}
    if(val==="Yes")
        dispatch(accessBook(hash))
    }
    return(<div className="list-group-item">
    <div>
        {user.name} - {user.username}
        <br/>   
        {user.email}
    </div>
        <div>
            <select onChange={(e)=>handleOnChange(e)} name="privacy" defaultValue="Nah">
                <option name="yes">Yes</option>
                <option name="nah">Nah</option>

            </select>
        </div>
            </div>)
}
export default ShareBox