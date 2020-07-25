const followUserPath="http://localhost:3000/follow_users"
const followBookPath="http://localhost:3000/follow_books"
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
        window.alert("user followed")
        dispatch(getFollowedUsersOfUser(localStorage.getItem("currentUser")))
    })}

}
function getFollowersOfUser(id){
    return(dispatch)=>{fetch(userPath+"/"+id+"/followers").then(obj=>obj.json()).then(obj=>{

        let follows = obj.data
        dispatch(usersFollowers(follows))

    })}

}
function getFollowedUsersOfUser(id){
    console.log("EEAST")
    return(dispatch)=>{fetch(userPath+"/"+id+"/followed_users").then(res=>res.json()).then(obj=>{
debugger
        let follows= obj.data
        console.log("FollowUSERS",follows)
        dispatch(followedUsers(follows))

    })}

}
function followBook(id){
let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        'Accept': 'application/json'
          },
          body: JSON.stringify({
              followerId: localStorage.getItem("currentUser"),
              bookId: id
          })}
    return(dispatch)=>{fetch(followBookPath,config).then(res=>res.json()).then(obj=>{
window.alert("follow sent")
    dispatch(getFollowedBooksOfUser(localStorage.getItem("currentUser")))
     
    })}
}
function getFollowedBooksOfUser(id){
    return (dispatch)=>{fetch(userPath+"/"+id+"/followed_books").then(res=>res.json()).then(obj=>{
        let follows = obj.data
        dispatch(followedBooks(follows))
    })}

}


const followedUsers=(follows)=>{return{ type: "FOLLOWED_USERS",follows}}
              
const usersFollowers=(follows)=>{return{type: "USERS_FOLLOWERS",follows}}
const followedBooks=(follows)=>{return{type: "USERS_FOLLOWED_BOOKS",follows}}
export {followUser, getFollowersOfUser,getFollowedUsersOfUser,followBook,getFollowedBooksOfUser}