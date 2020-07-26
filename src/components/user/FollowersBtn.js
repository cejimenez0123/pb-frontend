import React, {useState} from 'react'
import {Button,Modal} from 'react-bootstrap'
import {useStore} from 'react-redux'
import FollowerCard from "./FollowerCard"
function FollowersBtn(props){
    const store = useStore()
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let userFollowers = store.getState().users.userFollowers
  let users = userFollowers.map(x=>{

   return <FollowerCard user={x.attributes.follower}/>

  })
    
    return(<div>
    <Button variant="primary" onClick={handleShow}>
       Followers
      </Button>

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
}
export default FollowersBtn