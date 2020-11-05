import React from 'react'
import ShareBox from "./ShareBox"

function SearchUsersShare({users}){

    if (users && users.length>0){

 let html = users.map(user=>{
    return(<ShareBox user={user.attributes}/>)
})
    
    return(<div className="searchUsersShare">
    <div className="list-group">
    {html}
    </div></div>)}else{
        return(<div></div>)
    }
}
export default SearchUsersShare