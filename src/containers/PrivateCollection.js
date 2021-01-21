import React , {useLayoutEffect} from 'react'


function PrivateCollection(props){
   let books
   let libraries
   useLayoutEffect(()=>{
       let id =localStorage.getItem("currentUser")
       props.getFollowedLibrariesOfUser(id)
       props.getFollowedBooksOfUser(id)
   },[]) 
    if(props.followedLibraries && props.followedLibraries.length>0){
        libraries = props.followedLibraries.map(lib=>{
           
           lib= lib.attributes
            return(<li><a href={`/libraires/${lib.id}`}>{lib.name}</a></li>)
        })
    }
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
                <ul>
                    {libraries}
                </ul>
            </div>


        </div>

    </div>)

}

export default PrivateCollection