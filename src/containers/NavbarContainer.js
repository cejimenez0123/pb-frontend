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
      console.log("xxxx",this.props.loggedIn)
 
        if (this.props.loggedIn ){
            return(
      <div id="Navbar">
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Pb</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href={`/users/${this.props.currentUser.id}`}>Home</Nav.Link>
      <Nav.Link href="">Street</Nav.Link>
      <Nav.Link href="/libraries/1">Local Library</Nav.Link>
      <Nav.Link  onClick={()=>this.handleOnClick}href="/">Log Out</Nav.Link>
    </Nav>
   <SearchBar users={this.props.users}/>
    
  </Navbar>
      </div>)
        }else{
            return(
        <div >
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Pb</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href={`/users/${this.props.currentUser.id}`}>Sign In</Nav.Link>
      <Nav.Link href="">Street</Nav.Link>
      <Nav.Link href="/libraries/1">Local Library</Nav.Link>
    </Nav>
    

           
     
    <SearchBar users={this.props.users}/>
   
     
  


  </Navbar>
   
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
  currentUser: state.users.currentUser}
}
function mapDispatch(dispatch){

}
export default connect(mapState)(NavbarContainer)

