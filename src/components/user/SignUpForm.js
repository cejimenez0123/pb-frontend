import React from "react"
import {signUp,newUser} from "../../actions/UserActions"
import { connect} from "react-redux"
import NavbarContainer from '../../containers/NavbarContainer'
let user = {photo: null}
class SignUpForm extends React.Component{
    constructor(){
        super()
            this.state={
                name: "",
                username:"",
                password:"",
                file: ""    
            }
    }
    componentDidMount(){
       user = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code. 
  // In reality, you will probably be using something like XHR or an HTML5 API.
 return newUser()
}) 
       
    }
    handleOnChange = e =>{   
        this.setState({[e.target["name"]]: e.target.value})
    }
    handleOnSubmit = e =>{
        e.preventDefault()
        this.props.signUp(this.state)    
    }
    render(){
       console.log(user)
        return(<div>
            <NavbarContainer/>
                <form className="SignUpForm" onSubmit={this.handleOnSubmit}> 

                    <label htmlFor="file">Profile Picture: </label>
                    <img src={localStorage.getItem("profile_photo")}/>
                    <input type='file'/>
                    <label htmlFor="name">Name:</label>
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
        signUp: (user)=>dispatch(signUp(user))
    }
}
export default connect(null,mapDispatchToProps)(SignUpForm)