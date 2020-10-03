import React from 'react'
import Books from "../components/book/books"
import NavbarContainer from "./NavbarContainer"
class LibraryContainer extends React.Component{
    constructor(){
        super()
        this.state={books: []}
    }
    componentDidMount(){

        let id = window.location.pathname.split("/")[2]
        this.props.getLibrary(id)
        this.props.getBooksOfLib(id)
    }
   ifEdit(){

if(this.props.library && this.props.library.user === localStorage.getItem("currentUser"))
    return (<a>Edit</a>)

   }
    render(){
        let lib= {}
    
         console.log(this.props.library)
        if(this.props.library){
           
            lib = this.props.library
        }
       
        return(<div>
        <NavbarContainer/>
        <div className="libContainer">
        <div className="idBox">
        <h2 className={"libName"}>{lib.name}</h2>
        {this.ifEdit()}
        <button className="followBtn">Follow</button>
        </div>
        <div className="lib">
        
    <Books books={this.props.books}/>
    </div>
    </div>
        </div>)
    }
}
export default LibraryContainer