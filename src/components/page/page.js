import React from 'react'
import { render } from 'react-dom'

const Page = (props)=>{

    const renderPage=()=>{
        
   
       let html=  (
           <div>
           <p>{props.page.user.username}</p>
           <div>
           {props.page.data}
           </div>
           </div>)
        return(
            <div className={`page-${props.page.id}`} dangerouslySetInnerHTML={{__html: 
                html}}></div>
        )
    }
    return(
        <div id="pages" >
            {renderPage()}
        </div>
    )

    
}
export default Page