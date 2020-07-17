import React from 'react'
import {connect} from 'react-redux'
import Page from "../page/page"
import {ListGroup} from 'react-bootstrap'
class Library extends React.Component{
    constructor(props){
        super(props)
        this.state={books:[],
        pages: []}
    }
    componentDidUpdate(){
      
       
 
}
renderThis(){
  
 let filterPages = []
        
    if(this.props.books.length > 0){
            
            this.props.books.forEach(book=>{
     filterPages= this.props.allPages.filter(t=>{ 

                return t.attributes.book_id === book.attributes.id

        })
        
      })
    
      }

        if(filterPages.length >0){
        
         return filterPages.map((t,i)=>{
    
              return (<Page page={t.attributes} key={i}/>)

          })
          
          
         
      }

    
}   
    render(){
        return(<div>
  
    {this.renderThis()}

        </div>)
    }
}
const mapStateToProps=(state)=>{
    return {
        allLibraries: state.libraries.libraries,
        allBooks: state.books.books,
        allPages: state.pages.pages
    
    }
}
export default connect(mapStateToProps,null)(Library)


