import React from 'react'
import SearchCard from './SearchCard'


export default class SearchCardIndex extends React.Component{
    constructor(){
        super()
        this.state = {users: [], filterd:[]}
    }

    componentWillReceiveProps(){
        this.setState({users: this.props.users})
    }

    renderIndex(arr){
    return arr.map((user,i)=>{
        debugger
        if(user.attributes){
            user = user.attributes
        }
      return  <SearchCard user={user}/>
        
    })
    
}
   handleOnChange = (e)=>{
        let users = this.state.users
       let newList
        let oldList = users.map(user=>{
            user = user.attributes
            return {name: user.name.toLowerCase(),username: user.username.toLowerCase(),id: user.id}})
        let word = e.target.value
            if(word !==""){
            
           newList = oldList.filter(user=>{
               
          return (user.username.includes(word)||(user.name.includes(word))
           )})
        }else{
            newList=oldList
        }
        console.log(this.state)
        this.setState({filterd: this.renderIndex(newList)}) 
        
        
    }
    render(){
    return(<div >
        <input type="text" value="" onChange={(e)=>this.handleOnChange(e)}/>
        <ul className="searchIndex ">
            {this.state.filterd}
        </ul>
    </div>)}

}