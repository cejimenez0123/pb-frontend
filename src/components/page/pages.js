import React from 'react'
import Page from "./page"
import {getLikesOfUser} from "../../actions/LikeActions"
import {getPagesComments} from "../../actions/PageActions"
import PageCard from "../page/PageCards"
import {connect ,useDispatch} from 'react-redux'
import {useBottomScrollListener} from "react-bottom-scroll-listener"
  let size= {width: window.innerWidth,height: window.innerHeight}

class Pages extends React.Component{
  
  componentDidMount(){
// if(this.props.pages && this.props.pages.length>0){
//     debugger
//       this.props.getLikesOfPages(this.props.pages)
//       }
      this.props.getLikesOfUser()
  }

 renderPages(){
        
    
      // console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
        if(this.props.pages && this.props.pages.length>0){
            debugger
            return ( this.props.pages.map(page=>{
                let comments = []
                page = page.attributes
                return (
                        <PageCard likes={this.props.userLikes} page={page} key={page.id}  pageComments={this.props.pageComments} size={size}/>
                        )
                        })
                    )
                }else{

                return(<div className="noPages"> 
                    <h3>0 pages</h3>
                </div>)
            }
    }
            

    
    
   render(){     
    return(<div className="pages">

    {this.renderPages()}
    </div>)
   }
    

}


const mapState=(state)=>{
    return{
        comments: state.pages.pageCommentsInView,
        userLikes: state.users.userLikes
    }
}
const mapDispatch=(dispatch)=>{
    return{
        getPagesComments: (arr)=>dispatch(getPagesComments(arr)),
        pageComments: (comments)=>dispatch({type: "PAGE_COMMENTS",comments}),
     getLikesOfUser: ()=>dispatch(getLikesOfUser())
    }
}
export default connect(mapState,mapDispatch)(Pages)