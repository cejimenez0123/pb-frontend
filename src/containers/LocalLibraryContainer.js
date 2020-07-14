import React from 'react'
import NavbarContainer from "./NavbarContainer"
import Books from "../components/book/books"
import Library from "../components/library/Library"
class LocalLibraryContainer extends React.Component{

    render(){

        console.log(this.props.books)
        return(<div>
    <NavbarContainer/>
    <Books books={this.props.books}/>
    <Library books={this.props.books} users={this.props.users} pages={this.props.pages}/>
        </div>)
    }
}
export default LocalLibraryContainer