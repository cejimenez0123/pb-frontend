import React , {useLayoutEffect} from 'react'


function PrivateCollection(props){
   let books
   let libraries
   useLayoutEffect(()=>{
       props.getFollowedLibrariesOfUser(localStorage.getItem("currentUser"))
   }) 
    if(props.followedBooks && props.followedBooks.length>0){
    books = props.followedBooks.map(book=>{
        debugger
        return(<li>{book.title}</li>)
    })}
    let pages
    return(<div>
        <div >
            <div>
            <h1>Books</h1>
                <ul>
                    {books}
                </ul>
            </div>
            <div>
            <h1>Library</h1>
            </div>


        </div>

    </div>)

}

export default PrivateCollection