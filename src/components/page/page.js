import React from 'react'

const Page = (props)=>{

    if(props.page){
        
       return(<div>
           {props.page.data}
       </div>)

    }

    return(<div>

    </div>)
}
export default Page