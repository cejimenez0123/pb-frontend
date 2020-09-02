import React from 'react'
import NavbarContainer from './NavbarContainer'
import EditPages from '../components/page/EditPages'

import {connect } from 'react-redux'
class BookDraftsContainer extends React.Component{
    constructor(){
        super()
        this.state={title:""}
    }
    componentDidMount(){
       let id = window.location.pathname.split("/")[2]
       this.props.getBook(id)
    }


    render(){
        return(<div>
           
            <NavbarContainer/>
        {this.bookInView.title} Draft's
       DraftBookContainer
        <EditPages/>
        </div>)
    }
}
const mapState=(state)=>{
    return{
        pagesInView: state.pages.pagesInView
    }
}
export default BookDraftsContainer