import React from 'react'
class MyBook extends React.Component{

    createIf(){
        let input = React.createElement("input")
       let btn = document.getElementsByClassName("AddPage-Btn")
       btn.appendChild(input)
        let div = document.getElementsByClassName("book")


    }
    render(){
        return(
            <div>
                <h3>MyBook</h3>
                <button className= "AddPage-Btn" onClick={()=>{this.createIf()}}>Add Page</button>
                <div className="book">

                </div>
            </div>
        )
    }
}