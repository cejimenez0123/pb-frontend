import React from 'react'


function ShareBox({user}){


    return(<div className="list-group-item">
    <div>
        {user.name} - {user.username}
        <br/>   
        {user.email}
    </div>
        <div>
            <h6>Yes </h6>|<h5> Nah</h5>
        </div>
            </div>)
}
export default ShareBox