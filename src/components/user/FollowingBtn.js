import React, {useState} from 'react'
import {Button,Modal} from 'react-bootstrap'
import {useStore} from 'react-redux'
import FollowerCard from "./FollowerCard"
function FollowingBtn(props){
    const [show, setShow] = useState(false);
    const store = useStore()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  let followedUsers = store.getState().users.followedUsers
  console.log(followedUsers)
  let users = followedUsers.map(x=>{
      return(<FollowerCard user={x.attributes.followed_user}/>)
  })
    return(<div>
    <Button variant="primary" onClick={handleShow}>
        Following
      </Button>

      <Modal show={show} onHide={handleClose}>
        
        <Modal.Body>x
            {users}
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    )
}

export default FollowingBtn