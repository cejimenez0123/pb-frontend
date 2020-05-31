import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {history }from '../../history'
import {Link} from 'react-router-dom'
import {usePageActions} from "../../actions/PageActions"
import { useDispatch, useStore } from 'react-redux'
import SearchCardIndex from '../user/SearchCardIndex'
import {share} from '../../actions/PageActions'
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
   function renderIf(){
        if(props.page){
            
            let page = props.page
           return(<div >
               <Link onClick={()=>{dispatch({type: "GET_PAGE",page})}}to={{pathname:`/pages/${page.id}/edit`}}>{page.title}</Link><button data-pageid={page.id} onClick={(e)=>handleOnClick(e)}>Share</button>
               <div id={`page-${page.id}`}></div>
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