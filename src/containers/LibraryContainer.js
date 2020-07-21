import React from 'react'
import Books from "../components/book/books"
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
   
    render(){
        let lib= {}
    
         console.log(this.props.library)
        if(this.props.library){
           
            lib = this.props.library
        }
       
        return(<div>
        {lib.name}
    <Books books={this.props.books}/>
        </div>)
    }
}
export default LibraryContainer