import React from 'react'
import Pages from '../components/page/pages'
import Book from "../components/book/book"
import NavbarContainer from "./NavbarContainer"
import { connect} from 'react-redux'

import {savePage} from '../actions/PageActions'
import PageInput from "../components/page/PageInput"
class BookContainer extends React.Component{
constructor(){
    super()
    this.state={title: ""}
}
handleOnClick(){

}
componentDidMount(){
    
    if(this.props.book){
        this.setState({title: this.props.book.title})
    }else{
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
    return{ currentBook: state.books.currentBook}
}
const mapDispatchToProps=(dispatch)=>{
    return{
        savePage: (data)=>dispatch(savePage(data))

    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(BookContainer)