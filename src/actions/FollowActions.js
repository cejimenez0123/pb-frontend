const followUserPath="http://localhost:3000/follow_users"
const followBookPath="http://localhost:3000/follow_books"
const followLibraryPath="http://localhost:3000/follow_libraries"
const userPath = "http://127.0.0.1:3000/users"
const bookPath="http://localhost:3000/books"
function bookFollowers(id){
    return(dispatch)=>{fetch(bookPath+`/${id}/book_followers`).then(res=>res.json()).then(obj=>{
      
        let follows = obj.data
    dispatch(booksFollows(follows))
    })}
}
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
  return(dispatch)=>{  fetch(followUserPath,config).then(res=>res.json()).then(obj=>{
       
        window.alert("user followed")
        dispatch(getFollowersOfUser(id))
    })}

}
function followLibrary(id){
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
              libraryId: id
          })}
  return(dispatch)=>{  fetch(followLibraryPath,config).then(res=>res.json()).then(obj=>{
       debugger
       
       dispatch(getFollowersOfLibrary(id))
    })}

}
function deleteFollowLibrary(follow){

    console.log("FIJDOOF")
    let config = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        'Accept': 'application/json'
          },
          body: JSON.stringify({
              
              id: follow.id
          })}
  return(dispatch)=>{  fetch(followLibraryPath+"/delete",config).then(res=>res.json()).then(obj=>{
       
       dispatch(getFollowersOfLibrary(follow.library.id))
    })}

}
function getFollowersOfLibrary(id){
  
    return(dispatch)=>{fetch(followLibraryPath+`/${id}`).then(res=>res.json()).then(follows=>{
       
       
    dispatch(libraryFollowers(follows))
    })}
}
function deleteBookFollow(follow){
let config={   
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      },
      body: JSON.stringify({
          id: follow.id
    })}
    return(dispatch)=>{fetch(followBookPath+`/${follow.id}/destroy`,config).then(res=>res.json()).then(obj=>{debugger}).catch(err=>{
        debugger
       dispatch(bookFollowers(follow.attributes.book.id))
        console.log(err)
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
debugger
    dispatch(bookFollowers(id))
    dispatch(getFollowedBooksOfUser(localStorage.getItem("currentUser")))
     
    })}
}
function getFollowedBooksOfUser(id){
    return (dispatch)=>{fetch(userPath+"/"+id+"/followed_books").then(res=>res.json()).then(obj=>{
        let follows = obj.data
        dispatch(followedBooks(follows))
    })}

}
function deleteFollow(follow){
    
let config = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        'Accept': 'application/json'
          },
          body: JSON.stringify({
              followerId: follow.attributes.follower.id,
              followedUser: follow.attributes.followed_user.id
          })}
    return (dispatch)=>{fetch(followUserPath+`/${follow.id}/destroy`,config).then(res=>res.json()).then(obj=>{
 
        dispatch(getFollowersOfUser(follow.attributes.followed_user.id))
    }).catch(err=>{ console.log(err)
    dispatch(getFollowersOfUser(follow.attributes.followed_user.id))})}

}

function libraryFollowers(follows){return{type:"LIBRARY_FOLLOWERS",follows}}
const followedUsers=(follows)=>{return{ type: "FOLLOWED_USERS",follows}}
const booksFollows=(follows)=>{return{type:"BOOK_FOLLOWERS",follows}}             
const usersFollowers=(follows)=>{return{type: "USERS_FOLLOWERS",follows}}
const followedBooks=(follows)=>{return{type: "USERS_FOLLOWED_BOOKS",follows}}
export {deleteBookFollow,followLibrary,bookFollowers,deleteFollow,followUser, getFollowersOfUser,getFollowedUsersOfUser,followBook,getFollowedBooksOfUser,getFollowersOfLibrary,deleteFollowLibrary}