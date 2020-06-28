import React from 'react'
import {ListGroup} from 'react-bootstrap'
class PageCards extends React.Component{
    construtor(){
        
        this.state = {myPages: null}
    }
   
    renderIf(){
       return this.props.myPages.map(page=>{
            
          return( <div><ListGroup.Item>{ page.attributes.data}</ListGroup.Item></div>)
           
        })
    }

    render(){
        // let pages
        // if (this.props.myPages){
        //     pages = this.state.myPages
        // }else{
        //     pages = "Write Something"
        // }
        return(
            
            <div>
                <ListGroup>
                {this.renderIf()}
              </ListGroup>
            </div>
        )
    }

}
export default PageCards