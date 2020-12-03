import React, {useState,useEffect} from 'react'
import "../../App.css"
import Page from "../page/page"
import Popup from 'reactjs-popup'
import PageInput from "../page/PageInput"
import {connect,useDispatch } from "react-redux"
import Editor from "../page/editor"
import {deleteBookFollow} from "../../actions/FollowActions"
import { getPagesOfBook } from "../../actions/PageActions"
import {Modal,Button} from "react-bootstrap"
import PageCards from "../page/PageCards"
import Pages from "../page/pages"
import Infinite from "react-infinite"
import {SortableContainer,SortableElement} from 'react-sortable-hoc'
import arrayMove from 'array-move'
import FollowerCards from "../user/FollowerCards"

let book

function Book(props){
    const dispatch = useDispatch()

    let [truthy,setTruthy]=useState("none")
    let [published_pages,setPublishedPages]=useState([])
    useEffect(()=>{
        setPublishedPages(props.book.published_pages)
        
         localStorage.setItem("published_pages",props.book.published_pages.join())
    },[props.book])
    useEffect(()=>{
         localStorage.setItem("published_pages",published_pages.join())
          debugger
    },[published_pages])
    const handleTruthyClose=(text)=>{
        
        setTruthy("none");}
    // let [pages,setPages]= useState([])
 function removeEditor(){
     props.removeEditor()
 }
 function ifSome(arr){
     if( arr && arr.length>0){
         return true
     }else{
         return false
     }
 }

    let pagesHTML=""
    let pages =[]
    const onSortEnd = ({ oldIndex, newIndex }) => setPublishedPages(arrayMove(published_pages, oldIndex, newIndex))
    const PagesSortContainer=SortableContainer(({ children } )=> <div >{children}</div>
    )
    const SortablePage = SortableElement(({ page,id }) => {
       
      book ={ published_pages}
        return(<Page key={id} page={page} />)});  

        if(props.book){
            
            
    if(props.editMode){
        if(ifSome(props.pagesInView)){
        
            
      
         let pages= published_pages.map(((id,index)=>{
           
           let page=props.pagesInView.find(page=>{return page.id == id})
           
            if(page){
                return (
                    <SortablePage index={index} page={page.attributes} key={id}/>
                )}else{
                    return("")
                }
        
           
               
    
    }))
     pagesHTML=(<PagesSortContainer onSortEnd={onSortEnd} axis="y">{pages}</PagesSortContainer>)
    }
    }else{
        if(ifSome(props.pagesInView)){
      
           pages= published_pages.map((id,index)=>{
           
                let page=props.pagesInView.find(page=>{return page.id == id})
            if(!page){
                return("")
            }else{
                return (<Page key={index} page={page.attributes} id={id}/>)}
               
            })}else if(ifSome(props.pages && !ifSome(props.pagesInView  ))){
                pages= props.book.published_pages.map(id=>{
                let page=props.pages.find(page=>{return page.id == id})
            debugger
                return (<Page page={page.attributes}/>)
            })}else{

                pages = <Pages pages={props.pagesInView}/>
            }
                pagesHTML=( <div>
                         {pages}
                        </div>)
    }    
            
              return (
<div>
              
    
      

                {/* <PageInput book={props.book}/> */}
               <div className={"scroll bookPages is-dark"}>
               <section>
                    <div style={{display: props.show}} className={"bookEditor"}>
                        <Editor book={props.book} handleTruthyClose={handleTruthyClose}/>
                    </div>
              
                    <div className="pages">
                        {pagesHTML}
                    </div>        
                </section>
            </div>
        </div>  
    )}else{
        return(<div></div>)
    }       
}


function mapDispatch(dispatch){
    return{getPagesOfBook:(id)=>dispatch(),
     pageComments: (comments)=>dispatch({type: "PAGE_COMMENTS",comments})}
}
function mapState(state){
   console.log("SHOW",state.books.showEditor)
    return{
        currentUser: state.users.currentUser,
        bookInView: state.books.bookInView,
        pages: state.pages.pages,
        books: state.books.books,
        users: state.users.users,
        followers: state.books.bookFollowers,
        show: state.books.showEditor
            }
}
export default connect(mapState,mapDispatch)(Book)


