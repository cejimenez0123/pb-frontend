import React from 'react'
import { render } from 'react-dom'

const Page = (props)=>{

    const renderPage=()=>{
        debugger
       
       let html=  props.page.data
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