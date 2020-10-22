import React from 'react'
import Page from "./page"
import {connect } from 'react-redux'
class Pages extends React.Component{
    componentDidMount(){
        
    }
    componentDidUpdate(){
    if(this.props.pages.length>0){
        
        if(!(this.props.comments.length > 0)){
             let arr= this.props.pages.map(page=>{return page.id})
            this.props.getPagesComments(arr)
        }
        }

    }
    

    render(){
    
        if(this.props.pages.length>0){
           
      
       
            return ( this.props.pages.map(page=>{
                let comments = []
                page = page.attributes
                
                
                if(this.props.comments){
                    let index = 0
    
            for(let i=0;i<this.props.comments.length;i++){
        
                    if(this.props.comments[i] && this.props.comments[i].length>0){
            
                  page.id ===this.props.comments[i][0].page.id? comments=this.props.comments[i]:comments=[]
                }
                }
        }
           
                return (<Page page={page} key={page.id} comments={comments} />)
            }))
        }else{
            return(<div className="emptyMessage"><p>Write Anything</p></div>)
        }
    }



    // render(){
    //     return(<div className={"pages"}>
       
    //         {this.renderIf()}
          
    //     </div>)
    // }

}


const mapState=(state)=>{
    return{
        comments: state.pages.pageCommentsInView
    }
}
export default connect(mapState)(Pages)