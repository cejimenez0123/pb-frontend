import React from 'react'
import { render } from 'react-dom'

const Page = (props)=>{

    const renderPage=()=>{

   
       let html=  props.page.data
        
        return(
            <div>
                By {props.page.user.username}
            <div className={`page-${props.page.id}`} dangerouslySetInnerHTML={{__html: 
                html}}></div>
                </div>
        )
    }
    return(
        <div id="pages" >
            {renderPage()}
        </div>
    )

    
}
export default Page