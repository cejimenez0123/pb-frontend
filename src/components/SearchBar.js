import store from "../index"
import React from 'react'
import {connect} from 'react-redux'
import {ListGroup,Dropdown} from 'react-bootstrap'
import "../App.css"
class SearchBar extends React.Component{
    constructor(){
        super()
        this.state={filtered:[]}
    }

    filterFunction(e){
let filtered
  let input = e.target.value.toUpperCase()
  
if(input.length>0){

  let users = this.props.users.filter(x=>{
   
  let  user = x.attributes
  return  user.name.toUpperCase().includes(input) || user.username.toUpperCase().includes(input)

  })
  let books= this.props.books.filter(book=>{
      
      book = book.attributes
      return book.title.toUpperCase().includes(input)
  })
  filtered= users.concat(books)
}
if(filtered){
 let list = filtered.map((x,i)=>{
     
    switch(x.type){
        case "user":
            let user = x.attributes
                return(
                 <div className="list-group-item search-item">
                     <a href={`http://localhost:4000/users/${user.id}`} key={i}> {user.name}-@{user.username}</a>
                </div>)
        case "book":
            let book = x.attributes
                return(
            <div className="list-group-item search-item">
                <a href={`http://localhost:4000/books/${book.id}`} key={i}> {book.title}</a>
            </div>)
     }
 })
 this.setState({filtered: list}) }
 else{
     this.setState({filtered: ""})
 }
    }
    render(){
        
        let state = store
        
        return(<div className="Navbar-search">
        <div >
        <form className="form-inline my-2 my-lg-0 search-from">
        
            <input className="form-control mr-sm-2 " type="search" placeholder="search..." onKeyUp={(e)=>this.filterFunction(e)}/>
            <button  className="search-btn" type="submit">Search </button>
          </form>
          
          </div>
            <div className="list-group search-index" >
            {this.state.filtered}
            </div>
        </div>)
    }
}
function mapState(state){
    return{ users: state.users.users,
    books: state.books.books,
    libraries: state.libraries.libraries}
}
export default connect(mapState)(SearchBar)