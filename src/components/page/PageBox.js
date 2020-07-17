import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {history }from '../../history'
import {Link} from 'react-router-dom'
import {usePageActions} from "../../actions/PageActions"
import { useDispatch, useStore } from 'react-redux'
import SearchCardIndex from '../user/SearchCardIndex'
import {share} from '../../actions/PageActions'
import {Accordion,Card,Button} from 'react-bootstrap'
import SearchCard from '../user/SearchCard'

const PageBox =(props)=>{
    let store = useStore()
    let com = usePageActions()
    let dispatch = useDispatch()
    function handleOnClick(e){
      let users  = store.getState().users.users
        debugger
       let div = document.querySelector(`#page-${e.target["dataset"]["pageid"]}`)
       debugger
       if(users){
       ReactDOM.render(<SearchCardIndex users={users} share={share} pageId={e.target["dataset"]["pageid"]}/>,div)}
        
       
    }
debugger

    
   function renderIf(){
       debugger
        if(props.page){
            let title = props.page.title
            if(title === ""){
                title = "Untitled"
            }
            let page = props.page
            let date = new Date (props.page.updated_at)
           let day = date.getDate()
            let month = date.getMonth()
          let year = date.getFullYear()
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0'+minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;
            let time = day+"/"+month+"/"+year+" "+strTime
            debugger
    
        
           return(<div >
               <Accordion >
                 <Card>
                     <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <input id={`title-${page.id}`} onDoubleClick={()=>{
                          let page= props.page
                          dispatch({type:"SAVE_PAGE",page})
                          history.push(`/pages/${props.page.id}/edit`)
                           
                        }} defaultValue={title}/>Updated at {time}
                     </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                      <Card.Body></Card.Body>
               </Accordion.Collapse>
               </Card>
               </Accordion>
           </div>)
    
        }
    }


        return(
            
            <div>
                {renderIf()}
            </div>
        )
        } 
export default PageBox