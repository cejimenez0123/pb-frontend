import React from "react"
import {signUp} from "../../actions/UserActions"
import { connect} from "react-redux"
class SignUpForm extends React.Component{
    constructor(){
        super()
            this.state={
                name: "",
                username:"",
                password:""    
            }
    }
    handleOnChange = e =>{   
        this.setState({[e.target["name"]]: e.target.value})
    }
    handleOnSubmit = e =>{
        e.preventDefault()
        this.props.signUp(this.state)    
    }
    render(){
        return(
            <div class="form">
                <form onSubmit={this.handleOnSubmit}> 
                    <label htmlFor="name">First Name:</label>
                    <input type="text" name="name" 
                    onChange={this.handleOnChange} />
                    <br/>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username"  onChange={this.handleOnChange} />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password"  onChange={this.handleOnChange} />
                    <br />
                    < input type="submit" value="Sign Up"/>
                </form>
                
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return{
        signUp: (user)=>signUp(user)
    }
}
export default connect(null,mapDispatchToProps)(SignUpForm)