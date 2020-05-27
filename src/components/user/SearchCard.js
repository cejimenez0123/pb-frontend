import React from 'react'

export default function SearchCard(props){
    const ifProps=()=>{
        console.log(props)
        
        let user = props.user
        debugger
        return(<div className="list-group-item">{user.name}- @{user.username}</div>)
    }
return(<div>
    {ifProps()}
</div>)
}