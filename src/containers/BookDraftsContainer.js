import React from 'react'
import NavbarContainer from './NavbarContainer'
import Pages from "../components/page/pages"
import DraftPages from "../components/page/DraftPages"
import {connect } from 'react-redux'
class BookDraftsContainer extends React.Component{
    constructor(){
        super()
        this.state={title:""}
    }
    componentDidMount(){
       let id = window.location.pathname.split("/")[2]
       this.props.getBook(id)
       this.props.getDrafts(id)
    }


    render(){
        if(this.props.bookInView){
        return(<div>
           
            <NavbarContainer/>
        <a href={`/books/${this.props.bookInView.id}`}>{this.props.bookInView.title} </a>Draft's
        
        <main>
        <DraftPages pages={this.props.pagesInView} book={this.props.bookInView}/>
        </main>
        {/* <Pages pages={this.props.pagesInView}/> */}
       DraftBookContainer
       
       
        </div>)}else{return(
            <div>
            <NavbarContainer/>
            </div>)
        }
    }
}
const mapState=(state)=>{
    return{
        pagesInView: state.pages.pagesInView
    }
}
export default connect(mapState)(BookDraftsContainer)