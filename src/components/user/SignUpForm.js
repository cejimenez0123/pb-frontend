import React from "react"

class SignUpForm extends React.Component{
    constructor(){
        super()
            this.state={
                firstName:"",
                lastName:"",
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
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" 
                    onChange={this.handleOnChange} />
                    <br/>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name="lastName"/>
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
export default SignUpForm