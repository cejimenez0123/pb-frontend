import React from 'react'
import Pages from '../components/page/pages'
import Book from "../components/book/book"
import Editor from "../components/page/editor"
import NavbarContainer from "./NavbarContainer"
import { connect} from 'react-redux'
import {followBook,bookFollowers} from "../actions/FollowActions"
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
    this.props.bookFollowers(id)
    
}
componentDidUpdate(){
    

}
ifBook(){

    if(this.props.book){

        return ( <Book book={this.props.book} pages={this.props.pagesInView} followBook={this.props.followBook}/>)
    }else{
        return("no book")
    }
}



    render(){
       

       
        return(<div>
        <NavbarContainer/>
        {this.state.title}
        BookContainer
    
        
        <main>
        <div style={{alignItems: "center" }}>
       {this.ifBook()}
           </div>
        </main>  
        </div>)
    }
}
const mapStateToProps=(state)=>{
    console.log(state.books.book)
    return{ book: state.books.bookInView,
    users: state.users.users,
    pagesInView: state.pages.pagesInView,
    currentPage: state.pages.currentPage}
}
const mapDispatchToProps=(dispatch)=>{
    return{
        savePage: (data)=>dispatch(savePage(data)),
        followBook:(id)=>dispatch(followBook(id)),
        getPagesOfBook:(id)=>dispatch(getPagesOfBook(id)),
        bookFollowers: (id)=>dispatch(bookFollowers(id))
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(BookContainer)