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
        dispatch(getFollowedUsersOfUser(localStorage.getItem("currentUser")))
    })}

}
function getFollowersOfUser(id){
    return(dispatch)=>{fetch(userPath+"/"+id+"/followers").then(obj=>obj.json()).then(obj=>{
 
        let follows = obj.data
        dispatch(followedUsers(follows))

    })}

}
function getFollowedUsersOfUser(id){
    return(dispatch)=>{fetch(userPath+"/"+id+"/followed_users").then(res=>res.json()).then(obj=>{
    
        let follows= obj.data
        dispatch(usersFollowed(follows))

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
debugger
     
    })}
}
function getFollowedBooksOfUser(id){

    
}


const followedUsers=(follows)=>{return{ type: "FOLLOWED_USERS",follows}}
              
const usersFollowed=(follows)=>{return{type: "USERS_FOLLOWED",follows}}
const followedBooks=(follows)=>{return{type: "FOLLOWED_BOOKS",follows}}
export {followUser, getFollowersOfUser,getFollowedUsersOfUser}