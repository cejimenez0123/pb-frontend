import React from 'react'

import '../App.css'
import { useStore } from 'react-redux'

function NavbarContainer (props){
  let store = useStore()

    function handleOnClick(){
        this.props.endSession()
    }
    function renderif(){
        if (props.loggedIn){
            return(
              <div>

              <li class="nav-item">
            <a class="nav-link"  onClick={()=>handleActivation()} href="/">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link"  onClick={()=>handleOnClick()} href="/">Log Out</a>
          </li>
          </div>)
        }else{
            return(<li class="nav-item">
            <a class="nav-link" onClick={(e)=>handleActivation(e)} href="/">Sign In</a>
          </li>)
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
           <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
              <a class="navbar-brand navbar" href="/">Pb</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <div>
      <li class="nav-item active">
        <a class="nav-link" onClick={(e)=>handleActivation(e)} href="/">Home</a>
      </li>
      </div>
      {renderif()}
    </ul>
  </div>
</nav>
            </div>
        )
    }

export default NavbarContainer