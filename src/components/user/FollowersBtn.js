import React, {useState} from 'react'
import {Button,Modal} from 'react-bootstrap'
import {useStore} from 'react-redux'
import connnect from 'react-redux'
import FollowerCard from "./FollowerCard"
function FollowersBtn(props){
    const store = useStore()
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let userFollowers = store.getState().users.userFollowers
  if(props.userFollowers && props.userFollowers.length>0){
  let users = userFollowers.map(x=>{

   return <FollowerCard user={x.attributes.follower}/>

  })
    
    return(<div>
    <button className="yellow button " onClick={handleShow}>
       Followers
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>{users}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    )
}else{
  return(<div>
  </div>)
}
}

function mapState(state){
  return{
    userFollowers: state.users.userFollowers
  }
}
export default FollowersBtn