import React from React 
import {ListGroup} from "react-bootstrap"
class PageIndex extends React.Component{
    constructor(){
        super()
        this.state={filterd: []}
    }
     render(){
         return(<div>
            {this.state.filterd}
            </div>
         )
     }
}