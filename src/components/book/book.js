import React, {useState} from 'react'
import PageInput from "../page/PageInput"
import {connect } from "react-redux"
import { getPagesOfBook } from "../../actions/PageActions"
import {Modal,Button} from "react-bootstrap"
import PageCards from "../page/PageCards"
import Pages from "../page/pages"
let book
function Book(props){
    book = props.books.find(book=>{return book.id==props.book.id } )
    book = book.attributes

    const [show, setShow,readyEdit,setReadyEdit] = useState(false);
let ifEdit = false
const handleEditClick = () => {
     let div= document.getElementById(`book-${props.book.id}`)
    if(ifEdit){
       ifEdit=false
       div.style.display = "none"
    }else{
       
       div.style.display = "block"
       ifEdit=true
    }
    
 };
  const handleCloseEdit = () => { };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

     let user_id 
        if(props.book.user_id){
            user_id = props.book.user_id
        }
        if(props.book.user){
          user_id = props.book.user.id
        }   
 let user ={id: null} 
   user = props.users.find(user=>{return user.id == user_id})
   function ifEditable(){


    
   
    }

function renderIf(){
    
        if(props.book ){
       
           let pages = props.pages.filter(page=>{
               return page.attributes.book.id == props.book.id
           })
            return(<div>
                <h3 onDoubleClick={handleShow} >{props.book.title} </h3>{editBtn()}
               
            <PageInput book={props.book}/>
           
                {ifEditable()}
                
                <Pages pages={pages}/>
               
            </div>)
        };
    };
   function editBtn(){
       let btn = null
  
        if(user_id === localStorage.getItem("currentUser")){
            btn = (<button onClick={handleEditClick}>Edit Book</button>)
        }
        return btn
    }
    

  if(book){
        return(<div>
        <div >
        {renderIf()}
  </div>
  <div>
 <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
      by  <a by href={`/users/${user.id}`}> {user.username}</a>
      {editBtn()}
      
      
       </Modal.Header>
        <Modal.Body>{renderIf()}</Modal.Body>
       <Modal.Footer>
            
         <Button variant="secondary" onClick={handleClose}>
            Close
           </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
       </Modal> 
</div>
 </div>
        )}

}
function mapDispatch(dispatch){
    return{getPagesOfBook:(id)=>dispatch()}
}
function mapState(state){
    return{
        pages: state.pages.pages,
        books: state.books.books,
        users: state.users.users
            }
}
export default connect(mapState,mapDispatch)(Book)

