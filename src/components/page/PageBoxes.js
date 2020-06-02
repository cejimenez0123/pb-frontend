import React from 'react'
import PageBox from "./PageBox"
import {Accordion} from 'react-bootstrap'
class PageBoxes extends React.Component{
    componentDidMount(){
        
    }

    renderIf(){
        
        if(this.props.pages){
            return ( this.props.pages.map((page,i)=>{
                console.log("hit")
              page = page.attributes
                return (<PageBox page={page} key={i}/>)
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
export default PageBoxes