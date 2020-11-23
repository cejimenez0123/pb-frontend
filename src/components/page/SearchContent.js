import React from 'react'
import {searchPhrases} from "../../actions/PageActions"
import {connect,useDispatch} from 'react-redux'

function SearchContent(props){

const dispatch = useDispatch()
function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}
function handleOnKeyUp(e){

    let string = e.target.value
    debounce(dispatch(searchPhrases(string)),500)
}
let results =""
    if(props.phrasePage && props.phrasePage.length >0){

    }

    return(<div className="SearchContent">
    
        <input onKeyUp={(e)=>handleOnKeyUp(e)} type="text" className="form-control "/>
        <button> Search</button>
    </div>)
}
function mapState(state){
    return{phrasePage: state.page.searchedFor}
}
export default SearchContent