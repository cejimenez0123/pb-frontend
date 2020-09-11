import React from 'react'
import NavbarContainer from './NavbarContainer'
import EditPages from '../components/page/EditPages'
import Pages from "../components/page/pages"
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
        {this.props.bookInView.title} Draft's
        <Pages pages={this.props.pagesInView}/>
       DraftBookContainer
       
        <EditPages/>
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