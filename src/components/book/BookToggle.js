import React,{useState} from 'react'
import {useStore} from 'react-redux'
import Page from "../page/page"

function BookToggle(props){
    let allPages=useStore().getState().pages.pages

    let [pageNum,setPageNum]=useState(1)
    let [pages,setPages] = useState([])
    function handleOnClick(){
        setPageNum(pageNum+1)
       let pags= props.book.published_pages.slice(0,pageNum)
       let paginas=pags.map((page_id,k)=>{
           
           let p = allPages.find(pa=>{
               
               return pa.id == page_id
           })
    
           return (<div>
                <Page page={p.attributes} key={k}/>
           </div>)
       })
       setPages(paginas)

    }
    console.log(props.book.id)
    return(<div className="list-group-item">
        <h4><a href={`/books/${props.book.id}`}>{props.book.title}</a></h4>
        {pages}
        <img onClick={handleOnClick} style={{width: "30px",height: "30px"}}src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/down4-512.png"/>
    
    </div>)
}
export default BookToggle