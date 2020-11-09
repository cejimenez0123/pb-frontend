import React,{useState} from 'react'
import ShareBox from "./ShareBox"

class SearchUsersShare extends React.Component{
   constructor(){
       super()
       this.state={filtered:[],bookAccessors:[]}
   }
  componentDidMount(){
  this.renderBookAccess()
   }
	 debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}
     handleClick(e){
        let input = e.target.value.toUpperCase()
     if(input.length >0){  
       let  f = this.props.users.filter(user=>{
     
            user = user.attributes
            return user.username.toUpperCase().includes(input) || user.name.toUpperCase().includes(input)
        })
 
    let html =this.shareBoxes(f)
        this.setState({filtered: html})
    }else{
      this.setState({filtered:[]})
    }}
   
   shareBoxes(users){
      if( users.length >0){
       return users.map(user=>{

    
   
     let bookAccess=null
    user = user.attributes
    //  if(this.props.bookAccessors&& this.props.bookAccessors.length>0){
     bookAccess = this.props.bookAccessors.find(access=>{
      
       return access.user.id===user.id})
     
    return(<ShareBox user={user} bookId={this.props.book.id} access={this.props.access} bookAccess={bookAccess}/>)
     
     
       })
     } 
   }      
    renderBookAccess(){
      
      if(this.props.bookAccessors && this.props.bookAccessors.length>0){
       
  return this.props.bookAccessors.map(access=>{
     
      let  user = access.user

        return (<ShareBox user={user} bookId={this.props.book.id} bookAccess={access}/>)
          })}
    }
     render(){  
 
 
    return(<div className="searchUsersShare">
  
    <input type="text" onKeyUp={(e)=>this.handleClick(e)}placeholder="search"/><input type="submit"/>
      <div className="searchedUsers">
        <div className="list-group">
          {this.state.filtered}
        </div>
      </div>
      <section className="bookAccessors">
       <div style={{top: "10px"}}className="list-group">
         {this.renderBookAccess()}
        </div>
      </section>
    </div>)
    
}}
export default SearchUsersShare