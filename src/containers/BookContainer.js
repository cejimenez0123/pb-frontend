import React from 'react'
import Pages from '../components/page/pages'
import NavbarContainer from '../containers/NavbarContainer'
class BookContainer extends React.Component{




    render(){
       
        return(<div>
    
            <Pages pages={this.props.pages}/>
        </div>)
    }
}
export default BookContainer