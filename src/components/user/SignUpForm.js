import React from "react"
import {signUp,newUser,uploadProfilePic} from "../../actions/UserActions"
import { connect} from "react-redux"
import NavbarContainer from '../../containers/NavbarContainer'

let user = {photo: null}
let formData = new FormData();
class SignUpForm extends React.Component{
    constructor(){
        super()
            this.state={
                name: "",
                username:"",
                password:"",
                file: "",
                type: ""    
            }
    }
   
       
    
    handleOnChange = e =>{ 
      
//     const formData = new FormData();
//     formData.append("file", e.target.files[0]);
    
//     // configure your fetch url appropriately
//     fetch(`http://localhost:3000/${localStorage.getItem("currentUser")}/upload`, {
//       method: "POST",
//       body: formData
//     })
//       .then(res => res.json())
//       .then(data => {
//           debugger

//        // do something with the returned data
//       });
//   };
        let reader = new FileReader()
        if(e.target["name"]==="file"){
    
    formData.append("file", e.target.files[0]);
    
    debugger
    this.setState({file: formData})
this.setState({type: e.target.files[0].type})
       ;
        }else{ 
        this.setState({[e.target["name"]]: e.target.value})
        }
    
    }
    handleOnSubmit = e =>{
        
        e.preventDefault()
        
        //  formData.append("file", e.target.files[0]);
      let x = this.props.signUp(this.state,formData)  
       debugger
    }
    render(){
      
        return(<div>
        
                <form className="SignUpForm" onSubmit={this.handleOnSubmit}> 
                    {/* <DirectUpload/> */}
                    <label htmlFor="file">Profile Photo:</label>
                    <input  inl minlength="2" attachments="true" onChange={this.handleOnChange} name="file" type="file"/>
                    <br/>
                    <label htmlFor="name">Name:</label>
                    <input required minLength="2" type="text" className="form-control" name="name" 
                    onChange={this.handleOnChange} />
                    <br/>
                    <label htmlFor="username">Username:</label>
                    <input required type="text" minLength="2" className="form-control" name="username"  onChange={this.handleOnChange} />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input required type="password" minLength="2" className="form-control" name="password"  onChange={this.handleOnChange} />
                    <br />
                    < input type="submit" value="Sign Up"/>
                </form>
                
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return{
        signUp: (user,formData)=>dispatch(signUp(user,formData)),
        uploadProfilePic:(formData)=>dispatch(uploadProfilePic(formData))
    }
}
export default connect(null,mapDispatchToProps)(SignUpForm)