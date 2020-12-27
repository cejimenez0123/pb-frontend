import React from 'react'
import LogInForm from "../components/user/LogInForm"
import SignUpForm from "../components/user/SignUpForm" 
class FormContainer extends React.Component{
   
    render(){
        
        return(
            
            <div>
            <div className="flex">
                <LogInForm/>
                <SignUpForm/>
            </div>
            </div>
        )
    }
}
export default FormContainer