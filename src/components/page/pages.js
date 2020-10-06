import React from 'react'
import Page from "./page"
class Pages extends React.Component{
    renderIf(){
    
        if(this.props.pages.length>0){
    
            return ( this.props.pages.map(page=>{
              page = page.attributes
                return (<Page page={page} key={page.id}/>)
            }))
            // this.props.pages.map(page=>{
            //   return  <Page page={page}/>
            // })
        }else{
            return(<div className="emptyMessage"><p>Write Anything</p></div>)
        }
    }
    editor(e){
        debugger
    }

    render(){
        return(<div className={"pages"}>
       
            {this.renderIf()}
          
        </div>)
    }

}
export default Pages