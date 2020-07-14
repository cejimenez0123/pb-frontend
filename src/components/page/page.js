import React from 'react'
import { render } from 'react-dom'
import {ListGroup} from 'react-bootstrap'
const Page = (props)=>{
    debugger
     if(props.page){
        debugger
        return(
        <div id="pages" >
           <ListGroup.Item>
           {props.page.data}
           </ListGroup.Item>
        </div>
    )
    }else if(props.page.attributes){
        debugger
        

    }
    debugger
    

    
}
export default Page