import React from 'react'


function ShareBox({user}){

    function handleOnChange(e){
        debugger
    }
    return(<div className="list-group-item">
    <div>
        {user.name} - {user.username}
        <br/>   
        {user.email}
    </div>
        <div>
            <select onChange={(e)=>handleOnChange(e)} name="privacy" defaultValue="Nah">
                <option name="yes">Yes</option>
                <option name="nah">Nah</option>

            </select>
        </div>
            </div>)
}
export default ShareBox