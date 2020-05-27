import React from 'react'

export default class SearchUsers extends React.Component{
    constructor(){
        super()
        this.state={filtered:[]}
    }

    handleOnChange(e){
        debugger
        let newList=[]
        if (e.target.value !== "") {
      let currentList = this.props.users.flat();
    
      newList = currentList.filter(item => {
          debugger
        
        // change current item to lowercase
    const lc = item.toLowerCase();
        // change search term to lowercase
const filter = e.target.value.toLowerCase();
return lc.includes(filter);})}else{
    newList = this.props.users
}
this.setState({filtered: newList})
 

    }
   
    renderIf(){
        this.state.filtered.map(m=>{
            debugger
            
        })
    }
 

    
    render(){
        return(<div>
            {/* <input type="text" onChange={(e)=>this.handleOnChange(e)}
            className="search" value="Search Users"/> */}
        </div>)
    }
}