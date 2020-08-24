import React, {useState} from 'react'
import PageInput from "../page/PageInput"
import {connect } from "react-redux"
import { getPagesOfBook } from "../../actions/PageActions"
import {Modal,Button} from "react-bootstrap"
import PageCards from "../page/PageCards"
import Pages from "../page/pages"
import Infinite from "react-infinite"
let book
function Book(props){
    book = props.books.find(book=>{return book.id==props.book.id } )
  
   
    const [show, setShow] = useState(false);
    const [title,setTitle]=useState("")
let ifEdit = false
const handleEditClick = () => {
     let div= document.getElementById(`book-${props.book.id}`)
     debugger
    if(ifEdit){
       ifEdit=false
       div.style.display = "none"
    }else{
       
       div.style.display = "block"
       ifEdit=true
    }
    
 };
//   const handleCloseEdit = () => { };
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

     let user_id 
  
     let user 
//         if(props.book && props.book.user_id){
//             setTitle(props.book.title)
//             user_id = props.book.user_id
//             user = props.users.find(user=>{return user.id == user_id})

//    user = user.attributes
//         }else 
 
   
   function ifEditable(){


    
   
    }

    let html
    let pages
        if(props.book ){
            if(props.pages.length > 0){
               
                pages= props.pages
            }
         pages = props.pages.filter(page=>{
               return page.attributes.book.id == props.book.id
           })
                
              
            
           
              return (<div>
               <div>
               
     
      
       <button>Edit Book</button>
      <h3 >{props.book.title} </h3>
        {
               
               ifEditable()}
               
                <PageInput book={props.book}/>
               <div className={"scroll"}>
                <Pages pages={pages}/>
                </div>

       
              </div>  
            </div>)}else{
                return(<div></div>)
            }
        };


function mapDispatch(dispatch){
    return{getPagesOfBook:(id)=>dispatch()}
}
function mapState(state){
    return{
        bookInView: state.books.bookInView,
        pages: state.pages.pages,
        books: state.books.books,
        users: state.users.users
            }
}
export default connect(mapState,mapDispatch)(Book)

