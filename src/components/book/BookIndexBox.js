import React,{useState} from 'react'
import LibraryIndex from "../library/LibraryIndex"
import LibrariesList from "../library/LibrariesList"
import {connect,useStore,useDispatch} from 'react-redux'
import {getAllLibraries} from "../../actions/LibraryAction"
import Book from "./book"
import SearchBar from "../SearchBar"

import Popup from "reactjs-popup"
import Modal from "../modal"
function mapState(state){

    return{allLibraries: state.libraries.libraries}
}
export default connect(mapState,null)(BookIndexBox)
function BookIndexBox(props){
    const store = useStore()

let [show, setShow] = useState("none");
let [addBook,setAddBook]=useState("none")
    function handleAddBook(){

        if(addBook==="none"){
            setAddBook("block")
        }
    }
   
   function handleModalClose(e){

      if(e.target === e.currentTarget){
    setAddBook("none")
     }
  }
const dispatch = useDispatch()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    if(props.allLibraries.length > 0){

    }
 function handleToggle(){
   
   if(show==="none"){
    
     setShow("block")
   }else{
     setShow("none")
   }
 }


   let book = props.book


return(<div className=" bookIndexBox list-group-item">
  <a  onClick={()=>dispatch({type: "BOOK_IN_VIEW",book})} href={`/books/${book.id}
  `}>{book.title}</a>
  <div onClick={handleToggle} className="test"></div> 
    <div className=" popUp-box" style={{display: show}}>
    <div>
    <button onClick={()=>handleAddBook()}className="button">Add book to library</button>
       
    </div>

 <div onClick={(e)=>handleModalClose(e)} style={{width: "100%",display: addBook}} class="modal">
            <div   class="modal-content">
                <span  class="close ">&times;</span>

                    <div className="add-book">
                
                    <h3> Add {book.title} to library</h3>
                    <br/>
                        <LibrariesList book={book} libraries={props.allLibraries}/>
                    </div>
                </div>
            </div>
        </div>
</div>
)
}
//     return(<div>
//     <div onClick={handleShow}>
//  -         
//                <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//       by  <a by href={`/users/${book.user.id}`}> {book.user.username}</a>
      
      
//        </Modal.Header>
//         <Modal.Body><Book book={book} /></Modal.Body>
//        <Modal.Footer>
            
//          <Button variant="secondary" onClick={handleClose}>
//             Close
//            </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//        </Modal> 
//         </div>)
// }

