import React from 'react'

class SearchCard extends React.Component{
    
    ifProps=()=>{
    
        let user = this.props.user
       
        return(
            
        <li className="searchCard">
            
            {user.name}- @{user.username}<input className="searchCheckBoc" data-id={user.id}type="checkbox"/></li>
        
        
        )
    }
    render(){
return(<div>
    {this.ifProps()}
</div>)}
}
export default SearchCard