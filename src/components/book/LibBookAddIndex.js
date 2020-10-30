import React from 'react'

export default function LibBookAddIndex(props){

    function handleChange(){

    }    
  let html=""
    if(props.books){
       debugger
   html=  props.books.map((book,i)=>{
            book = book.attributes
         
           return(<div className="list-group-item">
      {props.book.title}  <input data-bookId={props.book.id} onChange={handleChange} type="checkbox"/>
        </div>
           
           )
        })
        return(<div className="list-group">
        zcxvwd
             {html}
            </div>)
        }else{
            return(
            <div>
    {html}
    </div>)
}


      

            
}