import React from 'react'
import Page from "./page"
class Pages extends React.Component{
    renderIf(){
        if(this.props.pages){
        
            return ( this.props.pages.map(page=>{
              page = page.attributes
                return <Page page={page} key={page.id}/>
            }))
            // this.props.pages.map(page=>{
            //   return  <Page page={page}/>
            // })
        }else{
            return(<p>Write Anything</p>)
        }
    }


    render(){
        return(<div style={{margin: "auto"}}className={"pages"}>
       
            {this.renderIf()}
          
        </div>)
    }

}
export default Pages