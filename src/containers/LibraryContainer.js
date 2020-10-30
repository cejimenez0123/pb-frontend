import React from 'react'
import Books from "../components/book/books"
import NavbarContainer from "./NavbarContainer"
import Popup from "reactjs-popup"
import Modal from "../components/modal"
import BookIndex from "../components/book/BookIndex"
import LibBookAddIndex from "../components/book/LibBookAddIndex"
import SearchBookAdd from '../components/book/SearchBookAdd'
class LibraryContainer extends React.Component{
    constructor(){
        super()
        this.state={books: []}
    }
    componentDidMount(){

        let id = window.location.pathname.split("/")[2]
        this.props.getLibrary(id)
        this.props.getBooksOfLib(id)
        this.props.getFollowersOfLibrary(id)
        this.props.getAllPages()
        this.props.getBooksOfUser(localStorage.getItem("currentUser"))
    }
   ifEdit(){

if(this.props.library && this.props.library.user.id === localStorage.getItem("currentUser"))
    return ( 
   <div >
       
        <button className="button">Delete</button>
         </div>)

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
    
         console.log(this.props.library)
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