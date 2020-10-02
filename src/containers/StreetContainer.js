import React from 'react'
import NavbarContainer from "./NavbarContainer"
import {Accordion,Card,Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {getAllLibraries,getBookLibraries} from "../actions/LibraryAction"
import LibraryIndex from "../components/library/LibraryIndex"
class StreetContainer extends React.Component{
  componentDidMount(){
    this.props.getAllLibraries()
    this.props.getBookLibraries()
  }

    render(){
      console.log(this.props.libraries)
        return(
        <div>
          <NavbarContainer/>
            <div className="street">
              <div className="StreetLib">
               <LibraryIndex allBooks={this.props.books} bookLibraries={this.props.bookLibraries} libraries={this.props.libraries}/>
              </div>
            </div>
        </div>
        )
    }
}
function mapDispatch(dispatch){
  return{getAllLibraries:()=>dispatch(getAllLibraries()),
  getBookLibraries: ()=>dispatch(getBookLibraries())}
}
function mapState(state){
    return{libraries: state.libraries.libraries,
    books: state.books.books,
    bookLibraries: state.libraries.bookLibraries}
}
export default connect(mapState,mapDispatch)(StreetContainer)