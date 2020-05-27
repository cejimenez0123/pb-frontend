import React from 'react'
import {history }from '../../history'
import {Link} from 'react-router-dom'
import {usePageActions} from "../../actions/PageActions"
import { useDispatch } from 'react-redux'
const PageBox =(props)=>{
    let com = usePageActions()
    let dispatch = useDispatch()
   function renderIf(){
        if(props.page){
            
            let page = props.page
           return(<div >
               <Link onClick={()=>{dispatch({type: "GET_PAGE",page})}}to={{pathname:`/pages/${page.id}/edit`}}>{page.title}</Link><button >Share</button>
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