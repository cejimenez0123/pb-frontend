import React from 'react'
import ShareBox from "./ShareBox"

function SearchUsersShare({users}){

    if (users && users.length>0){
debugger
 let html = users.map(user=>{
    return(<ShareBox user={user}/>)
})
    
    return(<div >
    <div className="list-group">
    {html}
    </div></div>)}else{
        return(<div></div>)
    }
}
export default SearchUsersShare