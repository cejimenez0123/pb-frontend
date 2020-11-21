import React from 'react'
import NavbarContainer from "./NavbarContainer"
import ReactDOM from "react-dom"
import Books from "../components/book/books"
import Library from "../components/library/Library"
import {connect,Provider} from 'react-redux'
import {createStore} from 'redux'
import LibraryIndex from "../components/library/LibraryIndex"
import store from '../index'
import Pages from "../components/page/pages"
import BookIndex from "../components/book/BookIndex"

let toggle = "pages"
class LocalLibraryContainer extends React.Component{
    constructor(){
        super()
        
    }

    componentDidMount(){
this.props.getAllLibraries()
        // this.setState({inView:})
    }



    handleOnClick(e){
  
        let container=document.querySelector(".localLibMain")
        if(e.target.innerHTML =="Books"){
        //     // this.setState(inView: ()=>{return (<div><Books books={this.props.books}/></div>)})
           debugger
            ReactDOM.render(
            <Provider store={store}><BookIndex  books={this.props.books}/></Provider>,container)
        }else if(e.target.innerText=="Pages"){
          
        //    this.setState(inView: ()=>{return(<Library  books={this.props.books} users={this.props.users} pages={this.props.pages}/>)})
           
            ReactDOM.render(<Provider store={store}><Pages pages={this.props.pages}/></Provider>,container)
        }else if(e.target.innerText=="Libraries"){

             ReactDOM.render(<Provider store={store}><LibraryIndex libraries={this.props.libraires} /></Provider>,container)
        }
        


    }

    render(){

        console.log("pages",this.props.pages)
        console.log("users",this.props.users)
        return(<div>
    <NavbarContainer/>
    <button className="button" onClick={(e)=>this.handleOnClick(e)}>Books</button>
    <button className="button" onClick={(e)=>this.handleOnClick(e)}>Pages</button>
    <button className="button" onClick={(e)=>this.handleOnClick(e)}>Libraries</button>
    <div className="LibraryContainer">

   <div className="localLibMain"> 
<BookIndex  books={this.props.books}/>
    </div>
    {/* <Pages pages={this.props.pages}/> */}
    </div>
    
    
        </div>)
    }
}
const mapState=(state)=>{
    return{}
}
export default connect(mapState)(LocalLibraryContainer)