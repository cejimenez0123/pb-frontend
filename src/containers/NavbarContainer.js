import React from 'react'

import '../App.css'

class NavbarContainer extends React.Component{
    handleOnClick(){
        this.props.endSession()
    }
    renderif(){
        if (this.props.loggedIn){
            return(
          <li class="nav-item">
            <a class="nav-link"  onClick={()=>this.handleOnClick()} href="/">Log Out</a>
          </li>)
        }else{
            return(<li class="nav-item">
            <a class="nav-link" onClick={(e)=>this.handleActivation(e)} href="/">Sign In</a>
          </li>)
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
           <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
              <a class="navbar-brand navbar" href="/">Pb</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" onClick={(e)=>this.handleActivation(e)} href="/">Home</a>
      </li>
      {this.renderif()}
    </ul>
  </div>
</nav>
            </div>
        )
    }
}
export default NavbarContainer