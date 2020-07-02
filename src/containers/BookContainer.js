import React from 'react'
import Pages from '../components/page/pages'
import Book from "../components/book/book"
import NavbarContainer from "./NavbarContainer"
import { connect} from 'react-redux'
import {savePage} from '../actions/PageActions'
import PageInput from "../components/page/PageInput"
class BookContainer extends React.Component{




    render(){
       
        return(<div>
        <NavbarContainer/>
        BookContainer
        <Book/>
            <PageInput savePage={this.props.savePage}/>
            
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