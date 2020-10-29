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
        this.props.getFollowersOfLibrary(id)
    }
   ifEdit(){

if(this.props.library && this.props.library.user === localStorage.getItem("currentUser"))
    return (<a>Edit</a>)

   }
    handleFollow(){
        debugger
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
       
        return(<div>
        <NavbarContainer/>
        <div className="libContainer">
        <div className="idCard">
        <h2 className={"libName"}>{lib.name}</h2>
        <br/>
        <p>{lib.intro}</p>
        {this.ifEdit()}
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