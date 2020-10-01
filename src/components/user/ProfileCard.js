import React from 'react'

const ProfileCard =(props)=>{
    const renderIf=()=>{
        let user
    
        if(!!props.user){
      
        user = props.user
        console.log(user.photo)
        return(<div><h3>{user.name}</h3>
             < img inline src={user.photo} alt=""  width="50px" height="auto"/>
             <h4>@{user.username}</h4>
            </div>)
    
        }else{return (
            <img src="https://media.giphy.com/media/sSgvbe1m3n93G/source.gif"  alt="gif" width="50" height="50" />)}
        
        }
        return(
    
         <div>
              {renderIf()}
         </div>
        )
}
export default ProfileCard