import React from 'react'
import SearchCard from './SearchCard'
import ReactDOM from 'react-dom'
import "../../App.css"

export default class SearchCardIndex extends React.Component{
    constructor(){
        super()
        this.state = {users: [], filterd:[]}
    }

    componentDidMount(){
        this.setState({users: this.props.users})
        this.setState({filtered: this.renderIndex(this.props.users)})
        
    }

    renderIndex(arr){
        
    return arr.map((user,i)=>{
        if(user.attributes){
            user = user.attributes
        }
      return  <SearchCard user={user} key={i} pageId={this.props.pageId}/>
        
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
    handleOnClick(){
        let nodes = document.querySelectorAll(`#${this.props.pageId}`)
        nodes = Array.from(nodes)
        debugger
       let array = nodes.filter(input=>{
            if(input["checked"]){
                return input
            }
        })
        array.map(input=>{
            let id = input["dataset"]["id"]
            this.props.share(id)
        }

        )
        
        
        
    }
    
    

    render(){
    return(<div >
        <button onClick={()=>this.handleOnClick()}>Share with...</button>
        <input type="text"   onChange={(e)=>this.handleOnChange(e)}/>
        
        <ul className="searchIndex">
            {this.state.filterd}
        </ul>
    </div>)}

}