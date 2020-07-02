import React from 'react'
import {connect} from 'react-redux'
import '../App.css'
import { useStore } from 'react-redux'
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'
function NavbarContainer (props){
  let store = useStore()

    function handleOnClick(){
        this.props.endSession()
    }
    function renderif(){
      let user = store.getState()
        if (user.users.loggedIn){
          debugger
            return(
      <div >
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Pb</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href={`/users/${user.users.currentUser.id}`}>Home</Nav.Link>
      <Nav.Link href="">Street</Nav.Link>
      <Nav.Link href="/books">Local Library</Nav.Link>
      <Nav.Link  onClick={()=>this.handleOnClick}href="#/">Log Out</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
      </div>)
        }else{
            return(
        <div >
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Pb</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href={`/users/${user.users.currentUser.id}`}>Sign In</Nav.Link>
      <Nav.Link href="">Street</Nav.Link>
      <Nav.Link href="#/books">Local Library</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
    </div>
        )
            
           
        }
    }
    

  
   function handleActivation(e){
      e.preventDefault()
     let items=  document.querySelectorAll(".nav-item")
     
      Array.from(items).map(x=>{
        
        if(x.classList.contains("active")){

          x.classList.remove("active")
        }
      })
        e.target.classList.add("active")
       
   }
    
        return(
    
            <div >
          
      {renderif()}
    
            </div>
        )
    }

export default NavbarContainer

