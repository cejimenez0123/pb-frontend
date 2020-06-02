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
import EditorContainer from '../../containers/EditorContainer'
import Editor from "./editor"
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

    
   function renderIf(){
       debugger
        if(props.page){
            let title = props.page.title
            if(title === ""){
                title = "Untitled"
            }
            let page = props.page
           return(<div >
               <Accordion >
                 <Card>
                     <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <input id={`title-${page.id}`} value={title}/>
                     </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                      <Card.Body><Editor page={props.page}/></Card.Body>
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