import store from "../index"
import React from 'react'
import {ListGroup,Dropdown} from 'react-bootstrap'
export default class SearchBar extends React.Component{
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
  <ListGroup.Item>  <a href={`http://localhost:3001/`}key={i}> {user.name}-@{user.username}</a></ListGroup.Item>)

 })
 this.setState({filtered: list}) 
    }
    render(){
        
        let state = store
        
        return(<div>
        <form>
            <input type="text" placeholder="search..." onKeyUp={(e)=>this.filterFunction(e)}/><button type="submit">Submit</button>
            
            </form>
            <ListGroup >
            {this.state.filtered}
            </ListGroup>
        </div>)
    }
}