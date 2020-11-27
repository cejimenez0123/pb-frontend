import url from "./url"
const likePath = `${url}/likes`

function likePage({pageId,score}){
let config ={
  method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        body: JSON.stringify({
          userId: localStorage.getItem("currentUser"),
            pageId: pageId,
            score: score
        })}
        return(dispatch)=>{fetch(likePath,config).then(res=>res.json()).then(obj=>{
debugger
dispatch(getLikesOfUser())
         
        })
        }

  }
 
  function getLikesOfUser(){
    

    return(dispatch)=>{
    fetch(likePath+`/users/${localStorage.getItem("currentUser")}`).then(res=>res.json()).then(obj=>{
   debugger
        let userLikes = obj.data
dispatch({type: "USER_LIKES",userLikes})
    })
    }
  }
function userLikes(userLikes){return {type: "USER_LIKES",userLikes}}
  export {getLikesOfUser,likePage}