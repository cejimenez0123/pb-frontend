import React from 'react'
import EditBook from '../components/book/EditBook'

class EditBookContainer extends React.Component{
    render(){
        return(<div>
        <EditBook book={this.props.book}/></div>)
    }

}
export default EditBookContainer