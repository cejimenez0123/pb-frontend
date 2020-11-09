import React from 'react'
import {useDispatch} from 'react-redux'
import {accessBook,deleteBookAccess,updateBookAccess} from '../../actions/BookActions'

function ShareBox(props){
    const dispatch = useDispatch()
    let user = props.user
    let access
    if(props.bookAccess){

    if(props.bookAccess.access === ("view"||"edit"||"add")){
       
    
        access=`can ${props.bookAccess.access}`
        }

        
    }else{
     
        access = "can't view"}
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
        let level
        if(e.target.value!=="can'view"){
 level= e.target.value.split(" ")[1]
        }else{
            access= e.target.value.split(" ")[0]
        }
    
       
        let hash ={bookId: props.bookId,access:level,userId: props.user.id}
    debugger
    if(props.bookAccess){
        let obj= {access: props.bookAccess,level: level}
        dispatch(updateBookAccess(obj))
    }else{
    if(e.target.value!=="can't view"){
        dispatch(accessBook(hash))
    }else{
        dispatch(deleteBookAccess(props.bookAccess))
    }}}
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