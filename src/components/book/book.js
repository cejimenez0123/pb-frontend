import React, {useState} from 'react'
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
import FollowerCards from "../user/FollowerCards"

let book

function Book(props){
    const dispatch = useDispatch()

    let [truthy,setTruthy]=useState("none")
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

    let pages =[]

        if(props.book){

            if(ifSome(props.pagesInView)){
            console.log(props.pagesInView)
            
           pages= props.book.published_pages.map(id=>{
                let page=props.pagesInView.find(page=>{return page.id == id})
            
                return (<Page page={page.attributes}/>)
               
            })}else if(ifSome(props.pages && !ifSome(props.pagesInView  ))){
                pages= props.book.published_pages.map(id=>{
                let page=props.pages.find(page=>{return page.id == id})
            debugger
                return (<Page page={page.attributes}/>)
            })}else{

                pages = <Pages pages={props.pagesInView}/>
            }
            console.log("PAGES",pages)
              
              return (
<div>
              
    
      

                {/* <PageInput book={props.book}/> */}
               <div className={"scroll bookPages is-dark"}>
               <section>
               <div style={{display: props.show}} className={"bookEditor"}>
                
               <Editor book={props.book} handleTruthyClose={handleTruthyClose}/>
               </div>
              
               <div className="pages">
               {pages}
               </div>
                {/* <Pages pages={pages}/> */}
        
                </section>
                {/* </div> */}

        </div>
              </div>  
            )}else{
                
                return(<div></div>)
        

    }       
};


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

