const followPath="http://localhost:3000/follow_users"

function followUser(id){
    console.log("FIJDOOF")
    let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        'Accept': 'application/json'
          },
          body: JSON.stringify({
              followerId: localStorage.getItem("currentUser"),
              followedId: id
          })}
  return(dispatch)=>{  fetch(followPath,config).then(res=>res.json()).then(obj=>{
        debugger
        dispatch({type: "FOLLOWS"})
    })}

}
function getFollowersOfUser(id){


}
function getFollowedOfUser(id){


}

export {followUser, getFollowersOfUser,getFollowedOfUser}