import React from 'react'
import Page from "./page"
import {getPagesComments} from "../../actions/PageActions"
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
    renderPages(){
        if(this.props.pages.length>0){
           
      
       
            return ( this.props.pages.map(page=>{
                let comments = []
                page = page.attributes
                
                    return (<Page page={page} key={page.id}  pageComments={this.props.pageComments}/>)
                        }))
                }}

    render(){
    console.log(this.renderPages())
        
    return(<div>
    {this.renderPages()}
    </div>)

    }

}


const mapState=(state)=>{
    return{
        comments: state.pages.pageCommentsInView
    }
}
const mapDispatch=(dispatch)=>{
    return{
        getPagesComments: (arr)=>dispatch(getPagesComments(arr)),
        pageComments: (comments)=>dispatch({type: "PAGE_COMMENTS",comments})

    }
}
export default connect(mapState,mapDispatch)(Pages)