import React from 'react'
import {connect} from 'react-redux'
import '../App.css'
import { useStore } from 'react-redux'
// import "../node_modules/jquery/dist/jquery.min.js";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import {Navbar,Nav,NavDropdown,Form,FormControl,Button,ListGroup,OverlayTrigger,Popover} from 'react-bootstrap'
import {SET_CURRENT_USER} from "../actions/UserActions"
import SearchBar from "../components/SearchBar"
class NavbarContainer extends React.Component{
   constructor(){
     super()
     this.state={filtered: []}
   }
   componentDidMount(){
    //  this.props.getCurrentUser()
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
              <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="/">Pb</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href={`/user/${this.props.currentUser.id}`}>Profile</Nav.Link>
      <Nav.Link href={`/street`}>Private Library</Nav.Link>
      <Nav.Link href={'/library/1'}>Public Library</Nav.Link>
      <Nav.Link onClick={()=>this.handleOnClick()}href="/">Log Out</Nav.Link>
       
    </Nav>
    <Form inline>
   <SearchBar/>
      
    </Form>
  </Navbar.Collapse>
</Navbar>
        // mt-2 mt-lg-0
        //       <div className="collapse navbar-collapse" id="navbarSupportedContent" >
       
        //   <ul  className="navbar-nav mr-auto">
        //     <li className="nav-item active">
        //       <a className="nav-link" href={`/user/${this.props.currentUser.id}`}>Profile <span className="sr-only">(current)</span></a>
        //     </li>
        //     <li className="nav-item ">
        //       <a className="nav-link" href={`/street`}>Street</a>
        //     </li>
        //     <li className="nav-item">
        //       <a className="nav-link" href="/library/1">Local Library</a>
        //     </li>
        //     <li className="nav-item">
        //       <a className="nav-link"  onClick={()=>this.handleOnClick()}href="/">Log Out</a>
        //     </li>
        //   </ul> *
          
// </div>

//          </div>          
//       </nav>
//     </header>    
//    </div>

)
        }else{
            return(
              <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="/">Pb</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/login">Log In </Nav.Link>
      <Nav.Link href={`/street`}>Street</Nav.Link>
      <Nav.Link href={'/library/1'}>Local library</Nav.Link>
      <Nav.Link onClick={()=>this.handleOnClick()}href="/">Log Out</Nav.Link>
    </Nav>
    <Form inline>
   
                  <SearchBar/>
    </Form>
  </Navbar.Collapse>
</Navbar>
//         <div >
// <header>
//          <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
//       <a className="navbar-brand" href="/">Pb</a>
    
//         <div>  
            
       
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
      
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="nav navbar-nav ">
//             <li className="nav-item active">
//               <a className="nav-link" href="/login">Log In <span className="sr-only">(current)</span></a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/street">Street</a>
//             </li>
            
//             <li className="nav-item">
//               <a className="nav-link" href="/library/1">Local Library</a>
//             </li>
       
         
//           </ul>
 
// </div>

//          </div>  
      
 
        
//       </nav>
//        </header>  
//     </div>
  )
  
  }
}

    

  
     handleActivation(e){
      e.preventDefault()
     let items=  document.querySelectorAll(".nav-item")
     
      Array.from(items).map(x=>{
        
        if(x.classNameList.contains("active")){

          x.classNameList.remove("active")
        }
      })
        e.target.classNameList.add("active")
       
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

