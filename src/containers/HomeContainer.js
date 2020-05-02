import React from 'react'
import {Link} from 'react-router-dom'
class HomeContainer extends React.Component{
    render(){
        return(
            <div>
                < Link to="/signup" >Sign Up</Link>
                <br/>
                < Link to="/login">Log In</Link>
            </div>
        )
    }
}
export default HomeContainer