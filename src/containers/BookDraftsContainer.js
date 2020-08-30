import React from 'react'
import {connect } from 'react-redux'
class BookDraftsContainer extends React.Component{



    render(){
        return(<div>
            BookDraftsContainer
        </div>)
    }
}
const mapState=(state)=>{
    return{
        pagesInView: state.pages.pagesInView
    }
}
export default BookDraftsContainer