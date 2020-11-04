import React from 'react'
import {option} from 'react-bootstrap'
function FollowerCard(props){
    

    let user
    
if(props.user){
    user = props.user
}else if(props.follow.attributes){
    user = props.follow.attributes.follower
    }
    if(user){
        return(
            
        <li>
            
           <a href={`/users/${user.id}`}> {user.name}- @{user.username}</a></li>
        
        
        )}else{
            return("")
        }
    


}
export default FollowerCard