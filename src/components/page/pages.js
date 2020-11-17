import React from 'react'
import Page from "./page"
import {getPagesComments} from "../../actions/PageActions"
import {connect } from 'react-redux'
  let size= {width: window.innerWidth,height: window.innerHeight}

function Pages (props){
  
    React.useEffect(() => {
    function handleResize() {
       size = {width: window.innerWidth,height: window.innerHeight} 
    //   console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
    
}
 window.addEventListener('resize', handleResize)
  })

    function renderPages(){
        
    
      // console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
        if(props.pages && props.pages.length>0){
    
            return ( props.pages.map(page=>{
                let comments = []
                page = page.attributes
                return (
                        <Page page={page} key={page.id}  pageComments={props.pageComments} size={size}/>
                        )
                        })
                    )
                }else{

                return(<div className="noPages"> 
                    <h3>0 pages</h3>
                </div>)
            }
    }
            

    
    
        
    return(<div className="pages">
    {renderPages()}
    </div>)

    

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