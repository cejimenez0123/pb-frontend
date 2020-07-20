
const libraryPath = "http://localhost:3000/libraries"
const userPath = "http://localhost:3000/users"
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
          debugger
          dispatch(getUserLibraries(localStorage.getItem("currentUser")))  
          
      }).catch(err=>alert(err))}
    
}
function getAllLibraries(){

    return(dispatch)=>(fetch(libraryPath).then(res=>res.json()).then(obj=>{
        let libraries = obj.data
        dispatch(allLibraries(libraries))
    }))
}
function getUserLibraries(id){
    return(dispatch)=>{
        fetch(userPath+`/${id}/libraries`).then(res=>res.json()).then(obj=>{
            let libraries =obj.data
            dispatch(librariesInView(libraries))
        })
    }

}

function allLibraries(libraries){return{type:"ALL_LIBRARIES",libraries}}
function librariesInView(libraries){return{type:"LIBRARIES_IN_VIEW",libraries}}
export {startLibrary,getUserLibraries,getAllLibraries}