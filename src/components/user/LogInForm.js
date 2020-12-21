import React, {useState} from 'react'
import {LOG_IN} from "../../actions/UserActions"
import { connect,useDispatch} from "react-redux"
import { Redirect} from 'react-router-dom'
import NavbarContainer from '../../containers/NavbarContainer'
function LogInForm (props){
    const dispatch = useDispatch()
    let [state,setState]=useState({username: "",password:""})

    const handleOnChange = e =>{
        setState({...state,[e.target["name"]]: e.target.value})
    }
    const handleOnSubmit = e => {
        e.preventDefault()
       
      dispatch(LOG_IN(state))
    
    }
 
        return(
            <div className="LogI">
                <form className="LogInForm" onSubmit={(e)=>handleOnSubmit(e)}> 
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" onChange={(e)=>handleOnChange(e)}/>
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" onChange={(e)=>handleOnChange(e)}/>
                    <br />
                    < input type="submit" value="Log In"/>
                </form>    
            </div>
        )
    
}
// function mapDispatchToProps(dispatch){
//     return{
//         logIn: (user)=>dispatch(LOG_IN(user))
//     }
// }
export default (LogInForm)