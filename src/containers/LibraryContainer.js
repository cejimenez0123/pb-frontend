import React from 'react'
import Books from "../components/book/books"
import NavbarContainer from "./NavbarContainer"
import Popup from "reactjs-popup"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from "../components/modal"
import BookIndex from "../components/book/BookIndex"
import LibBookAddIndex from "../components/book/LibBookAddIndex"
import SearchBookAdd from '../components/book/SearchBookAdd'
class LibraryContainer extends React.Component{
    constructor(){
        super()
        this.state={books: [],
        name: "",intro:""}
    }
    componentDidMount(){

        let id = window.location.pathname.split("/")[2]
        this.props.getLibrary(id)
        this.props.getBooksOfLib(id)
        this.props.getFollowersOfLibrary(id)
        this.props.getAllPages()
        this.props.getBooksOfUser(localStorage.getItem("currentUser"))
    }
    deleteBookLibrary(book){
       let  hash= {bookId: book.id,libraryId: this.props.library.id}
        this.props.deleteBookLibrary(hash)
    }
    
   ifEdit(){
       let bookIndex = this.props.books.map(book=>{
     
           book = book.attributes 
           return (<div className="list-group-item">
            {book.title} <img onClick={()=>this.deleteBookLibrary(book)} style={{width: "30px",height:"30px",float:"right" }}src="https://image.flaticon.com/icons/png/512/61/61848.png"/>
           </div>)
       })
if(this.props.library && this.props.library.user.id === localStorage.getItem("currentUser"))
    return ( <Modal button={<button className="button">Edit</button>} content={
    <div className="updateLibrary"> 
        <form onSubmit={(e)=>this.handleUpdate(e)}>
            <input  className="form-control" type="text"  name="name" defaultValue={`${this.props.library.name}`}/>
            <br/>
            <textarea className="form-control" name="intro"  defaultValue={`${this.props.library.intro}`}/>
            <br/>
            <input type="submit" value="Update" />
        </form>
    <div className="list-group">
    {bookIndex}
    </div>
    </div>}/>

)

   }
   handleUpdate(e){
       e.preventDefault()
      let name = e.target.querySelector('input[name="name"]').value
      let intro=  e.target.querySelector('textarea[name="intro"]').value
      let hash = {id: this.props.library.id, name, intro}
      this.props.updateLibrary(hash)

   }
    handleFollow(){
    
        if(this.props.followers.length >0 && this.followExist()){
        let follow=  this.followExist()
           
       
           
            this.props.deleteFollowLibrary(follow)
        
        }else{
            this.props.followLibrary(this.props.library.id)
        }
        
    }
    followExist(){
       if(this.props.followers.length>0){
         let follow=  this.props.followers.find(follow=>{
   
           return follow.follower.id === localStorage.getItem("currentUser")})
            if(follow){
                return follow
            }else{
                return follow
            }
        }else{
       
            return false
        }
    }
    
    followBtn(){
        if(this.props.followers && this.followExist()){

            return (<button className="followedBtn button pink" onClick={()=>this.handleFollow()}>Following</button>)
        }else{
            return (<button className="followBtn button red" onClick={()=>this.handleFollow()}>Follow</button>)
        }
    }
    render(){
        let lib= {}
    
   
        if(this.props.library){
           
            lib = this.props.library
       
        }
       console.log("books",this.props.books)
        return(<div>
        <NavbarContainer/>
        <div className="libContainer">
        <div className="idCard">
        <h2 className={"libName"}>{lib.name}</h2>
        <br/>
        <p>{lib.intro}</p>
        {this.ifEdit()}
        <Modal button={ <button className="button">Add</button>} content={<SearchBookAdd library={lib} books={this.props.allBooks} booksOfLibrary={this.props.books}/>}/>
        {this.followBtn()}
        </div>
        <div className="lib">
        
        <Books books={this.props.books}/>
    </div>
    </div>
        </div>)
    }
}
export default LibraryContainer