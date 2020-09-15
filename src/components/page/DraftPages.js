import React from 'react'

import DraftPage from "./DraftPage"
const DraftPages=(props)=>{

function renderIf(){
        if(props.pages){
        
            return ( props.pages.map(page=>{
              page = page.attributes
                return (<DraftPage page={page} key={page.id}/>)
            }))
            // this.props.pages.map(page=>{
            //   return  <Page page={page}/>
            // })
        }else{
            return(<p>Write Anything</p>)
        }
    }


        return(<div style={{margin: "auto"}}className={"pages"}>
       
            {renderIf()}
          
        </div>)
    


   
}
export default DraftPages