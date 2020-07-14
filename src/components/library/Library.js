import React from 'react'
import {connect} from 'react-redux'
import Page from "../page/page"
class Library extends React.Component{
    constructor(){
        super()
        this.state={books:[],
        pages: []}
    }
    componentDidMount(){

        let filterPages 
        if(this.props.books){
            this.props.books.forEach(book=>{
     filterPages= this.props.allPages.filter(t=>{ 
                return t.attributes == book.attributes.id

        })
        
      })
   filterPages.map(t=>{
            debugger
            return <Page page={t}/>
        })
        this.setState({pages: filterPages}    )     
}}
    render(){
        return(<div>
    {this.state.pages}
        </div>)
    }
}
const mapStateToProps=(state)=>{
    return {
        libraries: state.libraries.libraries,
        allBooks: state.books.books,
        allPages: state.pages.pages
    
    }
}
export default connect(mapStateToProps)(Library)


