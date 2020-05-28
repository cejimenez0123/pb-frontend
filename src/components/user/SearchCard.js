import React from 'react'

class SearchCard extends React.Component{
    
    ifProps=()=>{
    
        let user = this.props.user
       
        return(<li><p>{user.name}- @{user.username}</p></li>)
    }
    render(){
return(<div>
    {this.ifProps()}
</div>)}
}
export default SearchCard