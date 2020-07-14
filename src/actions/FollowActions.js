const followUserPath="http://localhost:3000/follow_users"
const userPath = "http://127.0.0.1:3000/users"
function followUser(id){
    debugger
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
  return(dispatch)=>{  fetch(followUserPath,config).then(res=>res.json()).then(obj=>{
        debugger
        dispatch(getFollowedUsersOfUser(localStorage.getItem("currentUser")))
    })}

}
function getFollowersOfUser(id){
    return(dispatch)=>{fetch(userPath+"/"+id+"/followers").then(obj=>obj.json()).then(obj=>{
        debugger
        let follows = obj.data
        dispatch(followedUsers(follows))

    })}

}
function getFollowedUsersOfUser(id){
    return(dispatch)=>{fetch(userPath+"/"+id+"/followed_users").then(res=>res.json()).then(obj=>{
        debugger
        let follows= obj.data
        dispatch(usersFollowed(follows))

    })}

}

const followedUsers=(follows)=>{return{ type: "FOLLOWED_USERS",follows}}
              
const usersFollowed=(follows)=>{return{type: "USERS_FOLLOWED",follows}}

export {followUser, getFollowersOfUser,getFollowedUsersOfUser}