import React from 'react'
import {history }from '../../history'
class PageBox extends React.Component{

    renderIf(){
        if(this.props.page){
            
            let page = this.props.page
           return(<div onClick={()=>{history.push(`/pages/${page.id}`)}}>
               <h6>{page.title}</h6>
           </div>)
    
        }
    }

    render(){
        return(
            <div>
                {this.renderIf()}
            </div>
        )
    }
}
export default PageBox