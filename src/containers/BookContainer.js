import React from 'react'
import Pages from '../components/page/pages'
import Book from "../components/book/book"
import NavbarContainer from "./NavbarContainer"
import { connect} from 'react-redux'
import {followBook} from "../actions/FollowActions"
import {savePage,getPagesOfBook} from '../actions/PageActions'
import PageInput from "../components/page/PageInput"
class BookContainer extends React.Component{
constructor(){
    super()
    this.state={title: ""}
}
handleOnClick(){
    this.props.followBook(this.props.book.id)
}
componentDidMount(){
    let id = window.location.pathname.split("/")[2]
    this.props.getBook(id)
    this.props.getPagesOfBook(id)
    this.props.getAllPages()
    
}
componentDidUpdate(){
    

}

    render(){
       

       
        return(<div>
        <NavbarContainer/>
        {this.state.title}
        BookContainer
        <button onClick={()=>this.handleOnClick()}>Follow</button>
        <Book book={this.props.book} pages={this.props.pagesInView}/>
           
            
        </div>)
    }
}
const mapStateToProps=(state)=>{
    return{ book: state.books.bookInView,
    users: state.users.users,
    pagesInView: state.pages.pagesInView}
}
const mapDispatchToProps=(dispatch)=>{
    return{
        savePage: (data)=>dispatch(savePage(data)),
        followBook:(id)=>dispatch(followBook(id)),
        getPagesOfBook:(id)=>dispatch(getPagesOfBook(id))
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(BookContainer)