import React from 'react'
import {connect} from 'react-redux'
import '../App.css'
import { useStore } from 'react-redux'

import {Navbar,Nav,Form,FormControl,Button,ListGroup,OverlayTrigger,Popover} from 'react-bootstrap'
import {SET_CURRENT_USER} from "../actions/UserActions"
import SearchBar from "../components/SearchBar"
class NavbarContainer extends React.Component{
   constructor(){
     super()
     this.state={filtered: []}
   }
   componentDidMount(){
     this.props.getCurrentUser()
   }
filterFunction(e){
     let input = e.target.value
  let filtered = this.props.users.filter(x=>{
   
  let  user = x.attributes
  return  user.name.includes(input) || user.username.includes(input)

  })

 let list = filtered.map((x,i)=>{

  return(
  <ListGroup.Item>  <a key={i}> {x.attributes.name}</a></ListGroup.Item>)

 })
 this.setState({filtered: list}) 
    }
    
    
    handleOnClick(){
        this.props.endSession()
    }
renderif(){
//       console.log("xxxx",this.props.loggedIn)
 
        if (this.props.loggedIn ){
            return(
              <div >

         <nav class="navbar navbar-expand-lg navbar-light bg-success">
     <a class="navbar-brand" href="/">Pb</a>
    
        
        <SearchBar/>
         <div>  
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
       
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
       
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href={`/user/${this.props.currentUser.id}`}>Profile <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href={`/street`}>Street</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/library/1">Local Library</a>
            </li>
            <li class="nav-item">
              <a class="nav-link"o nClick={()=>this.handleOnClick()}href="/">Log Out</a>
            </li>
          </ul>
</div>

         </div>  
      
 
        
      </nav>
         
    </div>

)
        }else{
            return(
        <div >

         <nav class="navbar navbar-expand-lg navbar-light bg-success">
      <a class="navbar-brand" href="/">Pb</a>
    
        <div>  
        <SearchBar/>       
       
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Log In <span class="sr-only">(current)</span></a>
            <li class="nav-item active">
              <a class="nav-link" href={`/user/${this.props.currentUser.id}`}>Street</a>
            </li>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/library/1">Local Library</a>
            </li>
        
              
         
          </ul>
</div>

         </div>  
      
 
        
      </nav>
         
    </div>
  )
  
  }
}

    

  
     handleActivation(e){
      e.preventDefault()
     let items=  document.querySelectorAll(".nav-item")
     
      Array.from(items).map(x=>{
        
        if(x.classList.contains("active")){

          x.classList.remove("active")
        }
      })
        e.target.classList.add("active")
       
   } 
      render(){
        return(
    
            <div >
          
      {this.renderif()}
    
            </div>
        )
    }
    }

function mapState(state){

  return{users: state.users.users,
  loggedIn: state.users.loggedIn,
  currentUser: state.users.currentUser,
  books: state.books.books,
  libraries: state.libraries.libraries}
}
function mapDispatch(dispatch){
  return{getCurrentUser: ()=>dispatch(SET_CURRENT_USER())}
}
export default connect(mapState,mapDispatch)(NavbarContainer)

