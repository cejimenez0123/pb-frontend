import React from 'react'
import Page from '../page/page'
class FollowingFeed extends React.Component{
    constructor(){
        super()
        this.state={filterd: []}
    }
    renderThis(){

        let filtered =[]
    if(this.props.books){
       let array
        this.props.books.forEach(t=>{
        array =  this.props.pages.filter(p=>
                p.attributes.book_id == t.attributes.book.id
            )
            filtered.push(array)
        })}

        if(this.props.users){
            let array
        this.props.users.forEach(t=>{

            array =this.props.pages.filter(p=>
                t.attributes.followed_user.id==p.attributes.user.id)
            })
            filtered.push(array)

        }
        filtered.flat()
            function onlyUnique(value, index, self) { 
              return self.indexOf(value) === index;
            }
       let unique = filtered.filter( onlyUnique );
        unique = unique.flat().map(t=>{
            return (<Page page={t.attributes}/>)

        })
        debugger
    return unique
    }

render(){
    return(<div>
        
        {this.renderThis()}
    </div>)
}


}
export default FollowingFeed