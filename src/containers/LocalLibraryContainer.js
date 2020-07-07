import React from 'react'
import NavbarContainer from "./NavbarContainer"
import Books from "../components/book//books"
class LocalLibraryContainer extends React.Component{

    render(){
        return(<div>
    <NavbarContainer/>
    <Books books={this.props.books}/>
        </div>)
    }
}
export default LocalLibraryContainer