import React from 'react'

class UserContainer extends React.Component{

    render(){
        return(
            <div>
            <NavbarContainer loggedIn={this.props.loggedIn} endSession={this.props.endSession} />
                < ProfileCard />
            </div>
        )
    }
}