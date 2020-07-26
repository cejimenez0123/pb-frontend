import React from 'react'
import {ListGroup} from 'react-bootstrap'
import Page from "./page"
class PageCards extends React.Component{
    construtor(){
        
        this.state = {myPages: null}
    }
   
    renderIf(){
       return this.props.pages.map((page,i)=>{
            
          return( <div><Page page={page} key={i}/></div>)
           
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