import React, {useState} from 'react'
import Modal from "../modal"
import {useStore} from 'react-redux'
import FollowerCard from "./FollowerCard"
function FollowingBtn(props){
    let [show, setShow] = useState("none");
    const store = useStore()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  function handleModalClose(e){

      if(e.target === e.currentTarget){
       setShow("none")
     }
  }
  

  let users
  if(props.followedUsers && props.followedUsers.length > 0){
  users = props.followedUsers.map(x=>{
      return(<FollowerCard user={x.attributes.followed_user}/>)
  })}else{
    users="Follow some people"
  }
    return(<div>
   <Modal button={ <button style={{padding: "auto 10px auto 10px"}}onClick={()=>setShow("block")}className="button pink followingBtn" >
        Following
      </button>} content={
        <div>
        <div>
                         {users}
                        
                    </div>
                </div>}
         />
    </div>
    )
}

export default FollowingBtn