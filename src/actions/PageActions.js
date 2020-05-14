const pageUrl = "http://localhost:3000/pages"
const updatePage = (text,title) => {
 
    let id = localStorage.getItem("pageLink")
    const config = {    
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json"
          },
          body: JSON.stringify({
              id: id,
            text: text,
            title: title
          })}
     fetch(pageUrl+"/"+id,config).then(res => res.json()).then(obj=>{
         return((dispatch)=>{dispatch({type: "UPDATE_PAGE",obj})})
         
     })
}
const savePage = (data)=>{
  debugger
  let config = {    
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Accept: "application/json"
      },
      body: JSON.stringify({
        data: data
      })}
      fetch(pageUrl,config).then(res=>res.json()).then(
        obj=>{
          debugger
        
        }
      )
}
export {updatePage,savePage}