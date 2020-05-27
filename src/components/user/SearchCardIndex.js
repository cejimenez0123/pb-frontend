import React from 'react'
import SearchCard from './SearchCard'
import { useStore } from 'react-redux'

export default function SearchCardIndex(){
    let store = useStore()
    
const renderIndex=(arr)=>{
    let div = document.querySelector(".searchIndex")
   
   let list = arr.map((user,i)=>{

        return (<SearchCard key={i} user={user}/>)
    })
    debugger
    div.append(list)
    
}
   const   handleOnChange = (e)=>{
    let users=  store.getState().users.users
       debugger
       let newList
        let oldList = users.map(user=>{
            debugger
            user = user.attributes
            return {name: user.name.toLowerCase(),username: user.username.toLowerCase(),id: user.id}})
        let word = e.target.value
            if(word !==""){
            
           newList = oldList.filter(user=>{
               
          return (user.username.includes(word)||(user.name.includes(word))
           )})
           debugger
            
        }
        renderIndex(newList)
        
    }
    return(<div className="list-group">
        <input type="text" value="" onChange={(e)=>handleOnChange(e)}/>
        <div className="searchIndex">

        </div>
    </div>)

}