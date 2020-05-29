import React from 'react'
import PageBox from "./PageBox"
class Pages extends React.Component{

    
    renderIf(){
        if(this.props.pages){
            
            return ( this.props.pages.map((page)=>{
              page = page.attributes
                return (<PageBox page={page} key={page.id}/>)
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