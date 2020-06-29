import React from 'react'
import Pages from '../components/page/pages'
import NavbarContainer from '../containers/NavbarContainer'
import Book from "../components/book/book"
import { connect} from 'react-redux'
import {savePage} from '../actions/PageActions'
import PageInput from "../components/page/PageInput"
class BookContainer extends React.Component{




    render(){
       
        return(<div>
            <PageInput savePage={this.props.savePage}/>
            <Book/>
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