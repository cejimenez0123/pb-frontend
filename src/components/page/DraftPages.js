import React from 'react'

import DraftPage from "./DraftPage"
const DraftPages=(props)=>{

function renderIf(){
        if(props.pages.length>0){
       
            return ( props.pages.map(page=>{
              page = page.attributes
                return (
                <DraftPage page={page} key={page.id} book={props.book}/>)
            }))
            // this.props.pages.map(page=>{
            //   return  <Page page={page}/>
            // })
        }else{
            return(<p>No Drafts</p>)
        }
    }


        return(<div style={{margin: "auto"}} className={""}>
<div className="">
            {renderIf()}
          </div>
        </div>)
    


   
}
export default DraftPages