import React from 'react'
import {connect} from 'react-redux'
class Library extends React.Component{

    render(){
        return(<div>

        </div>)
    }
}
const mapStateToProps=(state)=>{
    return {
        libraries: state.library.libraries,
        pages: state.pages.pages
    
    }
}
export default connect(mapStateToProps)(Library)


