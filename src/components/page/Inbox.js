import React from 'react'
import Package from "./Package"
class Inbox extends React.Component{
    constructor(){
        super()
        this.state={inbox:[]}
    }

renderIf(){
    debugger 
    
  return  this.props.inbox.map(payload=>{
        
        let {content,user}= payload.attributes
        debugger
        return <Package content={content} user={user}/>
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