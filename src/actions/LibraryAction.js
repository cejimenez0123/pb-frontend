
const libraryPath = "http://localhost:3000/libraries"

function startLibrary(name){
 let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        'Accept': 'application/json'
          },
          body: JSON.stringify({
              name: name,
              userId: localStorage.getItem("currentUser")
          })}
      return(dispatch)=>{fetch(libraryPath,config).then(res=>res.json()).then(obj=>{    
          
      })}
    
}
function getAllLibraries(){

    return(dispatch)=>(fetch(libraryPath).then(res=>res.json()).then(obj=>{
        let libraries = obj.data
        dispatch(allLibraries(libraries))
    }))
}

function allLibraries(libraries){return{type:"ALL_LIBRARIES",libraries}}
export {startLibrary}