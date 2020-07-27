import React from 'react'
import Pages from '../components/page/pages'
import Book from "../components/book/book"
import NavbarContainer from "./NavbarContainer"
import { connect} from 'react-redux'
import {followBook} from "../actions/FollowActions"
import {savePage} from '../actions/PageActions'
import PageInput from "../components/page/PageInput"
class BookContainer extends React.Component{
constructor(){
    super()
    this.state={title: ""}
}
handleOnClick(){
    this.props.followBook(this.props.book.id)
}
componentDidUpdate(){
    debugger
    if(this.props.book !== null){
        this.setState({title: this.props.book.title})
    }else{
        debugger
        let id = window.location.pathname.split("/")[2]
        this.props.getBook(id)
    }
}

    render(){
       

       
        return(<div>
        <NavbarContainer/>
        {this.state.title}
        BookContainer
        <button onClick={()=>this.handleOnClick()}>Follow</button>
        <Book book={this.props.book}/>
           
            
        </div>)
    }
}
const mapStateToProps=(state)=>{
    return{ book: state.books.bookInView}
}
const mapDispatchToProps=(dispatch)=>{
    return{
        savePage: (data)=>dispatch(savePage(data)),
        followBook:(id)=>dispatch(followBook(id))

    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(BookContainer)