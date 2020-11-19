import React from 'react'
import {LOG_IN} from "../../actions/UserActions"
import { connect} from "react-redux"
import { Redirect} from 'react-router-dom'
import NavbarContainer from '../../containers/NavbarContainer'
class LogInForm extends React.Component{
    constructor(){
        super()
        this.state ={
            username: "",
            password: ""
        }
    }

    handleOnChange = e =>{
        this.setState({[e.target["name"]]: e.target.value})
    }
    handleOnSubmit = e => {
        e.preventDefault()
       
        this.props.logIn(this.state)
    
    }
    render(){
        return(
            <div className="LogI">
                <form class="LogInForm" onSubmit={this.handleOnSubmit}> 
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" onChange={this.handleOnChange}/>
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" onChange={this.handleOnChange}/>
                    <br />
                    < input type="submit" value="Log In"/>
                </form>    
            </div>
        )
    }
}
// function mapDispatchToProps(dispatch){
//     return{
//         logIn: (user)=>dispatch(LOG_IN(user))
//     }
// }
export default (LogInForm)