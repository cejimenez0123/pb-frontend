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

  let input = e.target.value

  let filtered = this.props.users.filter(x=>{
   
  let  user = x.attributes
  return  user.name.includes(input) || user.username.includes(input)

  })

 let list = filtered.map((x,i)=>{
     let user = x.attributes
  return(
    <a href={`http://localhost:3001/users/${user.id}`} key={i}> {user.name}-@{user.username}</a>)

 })
 this.setState({filtered: list}) 
    }
    render(){
        
        let state = store
        
        return(<div className="Navbar-search">
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="search..." onKeyUp={(e)=>this.filterFunction(e)}/>
            <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search </button>
          </form>
        <form>
            
            </form>
            <ListGroup >
            {this.state.filtered}
            </ListGroup>
        </div>)
    }
}
function mapState(state){
    return{ users: state.users.users}
}
export default connect(mapState)(SearchBar)