import React from 'react'
import { render } from 'react-dom'
import {ListGroup} from 'react-bootstrap'
const Page = (props)=>{
    function handleDbClick(){
        debugger

    }
    console.log(props.page)
     if(props.page){
        return(
        <div id="pages" >
           <ListGroup.Item>
           {props.page.data}
           </ListGroup.Item>
        </div>
    )
    }else if(props.page.attributes){
        let page = props.page.attributes
        return(
        <div id="pages" >
           <ListGroup.Item>
           {page.data}
           </ListGroup.Item>
        </div>)

    }
    
    

    
}
export default Page