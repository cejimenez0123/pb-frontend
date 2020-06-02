import React from 'react'
import {connect} from 'react-redux'
import '../App.css'
import { useStore } from 'react-redux'

function NavbarContainer (props){
  let store = useStore()

    function handleOnClick(){
        this.props.endSession()
    }
    function renderif(){
      let user = store.getState()
        if (user.users.loggedIn){
            return(
      <div >
         <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                 <a className="navbar-brand navbar" href="/">Pb</a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
               </button>
     <div className="collapse navbar-collapse" id="navbarNav">
       <ul className="navbar-nav">
         <li className="nav-item active">
           <a className="nav-link" onClick={(e)=>handleActivation(e)} href="/">Home</a>
         </li>
          <li className="nav-item">
           <a className="nav-link"  onClick={()=>handleActivation()} href={`/users/${user.users.currentUser.id}`}>Profile</a>
          </li>
          <li className="nav-item">
           <a className="nav-link"  onClick={()=>handleActivation()} href={`/users/${user.users.currentUser.id}/inbox`}>Inbox</a>
          </li>
          <li className="nav-item">
            <a className="nav-link"  onClick={()=>handleOnClick()} href="/">Log Out</a>
          </li>
      </ul>
      
    </div>
        </nav>
      </div>)
        }else{
            return(
        <div >
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <a className="navbar-brand navbar" href="/">Pb</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
    <div className="collapse navbar-collapse" id="navbarNav">
       <ul className="navbar-nav">
           <li className="nav-item active">
              <a className="nav-link" onClick={(e)=>handleActivation(e)} href="/">Home</a>
           </li>
            <li className="nav-item">
              <a className="nav-link" onClick={(e)=>handleActivation(e)} href="/">Sign In</a>
            </li>
        </ul>
      
          </div>
        </nav>
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

