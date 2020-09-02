import React from 'react'
import Pages from '../components/page/pages'
import Book from "../components/book/book"
import Editor from "../components/page/editor"
import NavbarContainer from "./NavbarContainer"
import { connect} from 'react-redux'
import {followBook} from "../actions/FollowActions"
import {savePage,getPagesOfBook} from '../actions/PageActions'
import PageInput from "../components/page/PageInput"
let truthy = false
class BookContainer extends React.Component{
constructor(){
    super()
    this.state={title: "",
    editor: null}
}
handleOnClick(){
    this.props.followBook(this.props.book.id)
}
componentDidMount(){
    let id = window.location.pathname.split("/")[2]
    this.props.getBook(id)
    this.props.getPagesOfBook(id)
    
    
}
componentDidUpdate(){
    

}



    render(){
       

       
        return(<div>
        <NavbarContainer/>
        {this.state.title}
        BookContainer

        <button onClick={()=>this.handleOnClick()}>Follow</button>
        <div style={{alignItems: "center" }}>
        <Book book={this.props.book} pages={this.props.pagesInView}/>
           </div>
            
        </div>)
    }
}
const mapStateToProps=(state)=>{
    return{ book: state.books.bookInView,
    users: state.users.users,
    pagesInView: state.pages.pagesInView,
    currentPage: state.pages.currentPage}
}
const mapDispatchToProps=(dispatch)=>{
    return{
        savePage: (data)=>dispatch(savePage(data)),
        followBook:(id)=>dispatch(followBook(id)),
        getPagesOfBook:(id)=>dispatch(getPagesOfBook(id))
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(BookContainer)