import React from 'react'
import NavbarContainer from "./NavbarContainer"
import ReactDOM from "react-dom"
import SearchContent from "../components/page/SearchContent"
import Library from "../components/library/Library"
import {connect,Provider} from 'react-redux'
import {createStore} from 'redux'
import LibraryIndex from "../components/library/LibraryIndex"
import store from '../index'
import {getPublicPages} from "../actions/PageActions"
import Pages from "../components/page/pages"
import BookIndex from "../components/book/BookIndex"
import Books from "../components/book/books"
let toggle = "pages"
class LocalLibraryContainer extends React.Component{
    constructor(){
        super()
        
    }

    componentDidMount(){
this.props.getAllLibraries()
this.props.getBookLibraries()
this.props.getPublicPages("10")
        // this.setState({inView:})
    }



    handleOnClick(e){
        console.log("LIB",this.props.libraires)
        let container=document.querySelector(".localLibMain")
        let books 
        if (this.props.books){
      books = this.props.books.filter(book=>{
         
            return book.attributes.published_pages.length > 0
        })}
        if(e.target.innerHTML =="Books"){
        //     // this.setState(inView: ()=>{return (<div><Books books={this.props.books}/></div>)})
       
            ReactDOM.render(
            <Provider store={store}><Books  books={books}/></Provider>,container)
        }else if(e.target.innerText=="Pages"){
           
            ReactDOM.render(<Provider store={store}><Pages pages={this.props.pages}/></Provider>,container)
        }else if(e.target.innerText=="Libraries"){

             ReactDOM.render(<Provider store={store}><LibraryIndex libraries={this.props.libraries} bookLibraries={this.props.bookLibraries} /></Provider>,container)
        }
        


    }

    render(){

        return(<div>

   
    
   
 <button className="button" onClick={(e)=>this.handleOnClick(e)}>Books</button>
    <button className="button" onClick={(e)=>this.handleOnClick(e)}>Pages</button>
    <button className="button" onClick={(e)=>this.handleOnClick(e)}>Libraries</button>
   <SearchContent/>
    <div className="LibraryContainer">
   <div className="localLibMain"> 
<Pages pages={this.props.pages}/>
    </div>
    
    
    </div>
    
    
        </div>)
    }
}
const mapState=(state)=>{
    return{librariesInView: state.libraries.librariesInView,
    bookLibraries: state.libraries.bookLibraries}
}
const mapDispatch=(dispatch)=>{
    return { getPublicPages:(count)=> dispatch(getPublicPages(count))}
}
export default connect(mapState,mapDispatch)(LocalLibraryContainer)