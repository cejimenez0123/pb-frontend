import React from 'react'
import Page from "./page"
class Pages extends React.Component{
    renderIf(){
        debugger
        if(this.props.pages !==[]){
        
            return ( this.props.pages.map(page=>{
              page = page.attributes
                return <Page page={page} key={page.id}/>
            }))
            // this.props.pages.map(page=>{
            //   return  <Page page={page}/>
            // })
        }else{
            return(<p>Write Somethings</p>)
        }
    }


    render(){
        return(<div>
            {this.renderIf()}
            
        </div>)
    }

}
export default Pages