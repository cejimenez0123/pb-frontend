import store from "../index"
import React from 'react'
import {connect} from 'react-redux'
import {ListGroup,Dropdown} from 'react-bootstrap'
import "../App.css"
class SearchBar extends React.Component{
    constructor(){
        super()
        this.state={filtered:[]}
    }

    filterFunction(e){
let filtered
  let input = e.target.value
if(input.length>0){
  filtered = this.props.users.filter(x=>{
   
  let  user = x.attributes
  return  user.name.includes(input) || user.username.includes(input)

  })
}
if(filtered){
 let list = filtered.map((x,i)=>{
     let user = x.attributes
  return(
      <div className="list-group-item search-item">
    <a href={`http://localhost:3001/users/${user.id}`} key={i}> {user.name}-@{user.username}</a>
    </div>)

 })
 this.setState({filtered: list}) }
 else{
     this.setState({filtered: ""})
 }
    }
    render(){
        
        let state = store
        
        return(<div className="Navbar-search">
        <form class="form-inline my-2 my-lg-0 search">
        <button class="btn btn-outline-light my-2 my-sm-0 search-btn" type="submit">Search </button>
            <input class="form-control mr-sm-2 search-bar" type="search" placeholder="search..." onKeyUp={(e)=>this.filterFunction(e)}/>
            
          </form>
            <div className="list-group search-index" >
            {this.state.filtered}
            </div>
        </div>)
    }
}
function mapState(state){
    return{ users: state.users.users}
}
export default connect(mapState)(SearchBar)