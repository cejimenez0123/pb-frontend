import React from 'react'
import {option} from 'react-bootstrap'
class FollowerCard extends React.Component{
    
    ifProps=()=>{
    
        let user = this.props.follow.attributes.follower
    
        return(
            
        <li>
            
           <a href={`/users/${user.id}`}> {user.name}- @{user.username}</a></li>
        
        
        )
    }
    render(){
return(<div>
    {this.ifProps()}
</div>)}
}
export default FollowerCard