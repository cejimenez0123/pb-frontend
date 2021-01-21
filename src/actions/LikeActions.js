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

dispatch(getLikesOfUser())
         
        })
        }

  }
 
  function getLikesOfUser(id){
    if(id){

    }else if(localStorage.getItem("currentUser").length>0 && id== localStorage.getItem("currentUser")){
        
    }else if(localStorage.getItem("currentUser").length>0){
      id = localStorage.getItem("currentUser")
    }

    return(dispatch)=>{
    fetch(likePath+`/users/${id}`).then(res=>res.json()).then(obj=>{
debugger
        let userLikes = obj.data
dispatch({type: "USER_LIKES",userLikes})
    }).catch(err=>console.log(err))
    }
  }
function userLikes(userLikes){return {type: "USER_LIKES",userLikes}}
  export {getLikesOfUser,likePage}