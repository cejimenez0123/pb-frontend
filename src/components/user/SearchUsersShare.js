import React from 'react'
import ShareBox from "./ShareBox"

function SearchUsersShare({users,book,access,bookAccessors}){

    if (users && users.length>0){
    
 let html = users.map(user=>{
     let bookAccess=null
    
     if(bookAccessors&& bookAccessors.length>0){
     bookAccess = bookAccessors.find(access=>{return access.user.id===user.id})
     }
    return(<ShareBox user={user.attributes} bookId={book.id} access={access} bookAccess={bookAccess}/>)
})
    
    return(<div className="searchUsersShare">
    <div className="list-group">
    {html}
    </div></div>)}else{
        return(<div></div>)
    }
}
export default SearchUsersShare