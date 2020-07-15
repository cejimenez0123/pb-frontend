import React from 'react'
import NavbarContainer from "./NavbarContainer"
import ReactDOM from "react-dom"
import Books from "../components/book/books"
import Library from "../components/library/Library"
import {connect,Provider} from 'react-redux'
import {createStore} from 'redux'
import store from '../index'
class LocalLibraryContainer extends React.Component{
    constructor(){
        super()
        this.state={inView: null}
    }

    



    handleOnClick(e){
  
        let container=document.querySelector(".LibraryContainer")
        if(e.target.innerHTML =="Books"){

            ReactDOM.render(
            <Provider store={store}><Books  books={this.props.books}/></Provider>,container)
        }else if(e.target.innerText=="Pages"){
          
            ReactDOM.render(<Provider store={store}><Library  books={this.props.books} users={this.props.users} pages={this.props.pages}/></Provider>,container)
        }
        


    }
    render(){

        console.log(this.props.books)
        return(<div>
    <NavbarContainer/>
    <button onClick={(e)=>this.handleOnClick(e)}>Books</button><button onClick={(e)=>this.handleOnClick(e)}>Pages</button>
    <div className="LibraryContainer">
        <Library  books={this.props.books} users={this.props.users} pages={this.props.pages}/>
    </div>
    
    
        </div>)
    }
}
const mapState=(state)=>{
    return{}
}
export default connect(mapState)(LocalLibraryContainer)