import React from 'react'
import Package from "./Package"
class Inbox extends React.Component{

renderIf(){

    
  return  this.props.inbox.map((payload,i)=>{
        
        let {content,user}= payload.attributes
      
        let sender = this.props.users.find(x=>{
           
           return x.id === content.user_id
        })
        
        console.log(sender)
        return <Package key={i} content={content} user={sender.attributes}/>
    })
}






    render(){
        return(<div>
           Inbox
           {this.renderIf()}
        </div>)
    }
}
export default Inbox