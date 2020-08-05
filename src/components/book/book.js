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
     debugger
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
 let user 
   user = props.users.find(user=>{return user.id == user_id})

   user = user.attributes
   function ifEditable(){


    
   
    }

function renderIf(){
    
        if(props.book ){
       
           let pages = props.pages.filter(page=>{
               return page.attributes.book.id == props.book.id
           })
          
            return(<div>
                
              
            
           
                {ifEditable()}
                <PageInput book={book}/>
                <Pages pages={pages}/>
               
            </div>)
        };
    };
   function editBtn(){
    //    let btn 

      
    //         btn = ()
    
    //     return btn
    
   }

  if(book){
  
        return(<div>
        <div >
        <h3 onClick={handleShow} >{book.title} </h3>
        
  </div>
  {renderIf()}
  <div>
 <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
    
      
        
       </Modal.Header>
      
        <Modal.Body>
         
        
        
        

        </Modal.Body>
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

