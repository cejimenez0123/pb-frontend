import React from 'react'

function PartInput(props){
   function handleOnSubmit(e){
       debugger
       e.preventDefault()

   }
    return(<div>

    <form onSubmit={(e)=>handleOnSubmit(e)}> 
        <input type="text"/><input type="submit"/>
    </form>
    </div>
    )
}
export default PartInput