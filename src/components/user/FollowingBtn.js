import React, {useState} from 'react'
import {Button,Modal} from 'react-bootstrap'
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
  if(props.followedUsers.length > 0){
  users = props.followedUsers.map(x=>{
      return(<FollowerCard user={x.attributes.followed_user}/>)
  })}else{
    users="Follow some people"
  }
    return(<div>
    <button onClick={()=>setShow("block")}className="button pink followingBtn" >
        Following
      </button>
      
      <div>
  
         <div onClick={(e)=>handleModalClose(e)} style={{display: show}} class="modal">
                    <div   class="modal-content">
                      <span  class="close">&times;</span>
                      <div  className="modalIndex">
                     
                         {users}
                        
                    </div>
                </div>
          </div>
          </div>
          
    </div>
    )
}

export default FollowingBtn