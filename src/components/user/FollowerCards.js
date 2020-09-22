import React from 'react'
import FollowerCard from './FollowerCard'
function FollowerCards(props){
    let html
   
    if(props.users.length>0){
      html=  props.users.map(follow=>{
            return <FollowerCard follow={follow}/>
        })
    }else{
        html="No Followers"
    }
    return(<div>
        {html}
    </div>)
}
export default FollowerCards