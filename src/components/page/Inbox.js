import React from 'react'

class Inbox extends React.Component{
    constructor(){
        super()
        this.state={inbox:[]}
    }
    componentDidMount(){
        debugger
        if(this.props.inbox){
            this.props.inbox.map(data=>{
                debugger
            })
        }
        this.setState({inbox: this.props.inbox})
    }


renderIf(){
    do{
        this.props.inbox.map(x=>{
            debugger
        })
    }while(this.props.inbox !== [])
}






    render(){
        return(<div>
            {this.renderIf()}
        </div>)
    }
}
export default Inbox