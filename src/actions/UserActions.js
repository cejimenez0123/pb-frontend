
function SIGN_UP_START(){
    return {
    type: "SIGN_UP_START"}
}
function signUp (user) { 
    let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json"
          },
          body: JSON.stringify({
              name: user.name,
              username: user.username,
              password: user.password  
          })}
          return ((dispatch) => {
            dispatch(SIGN_UP_START);
            fetch("http://localhost:3000/users",config)
                .then(res => res.json())
                .then(obj =>{
               
                    let user =  obj.data.attributes
                    localStorage.setItem("currentUser",user.id)
                    dispatch({ type: 'SIGN_UP', user})
            })
                .catch(err => {
                    debugger
                    console.error(err)
                  });
          })
    
}
function LOG_IN_START(){
    return{
        type: "LOG_IN_START"
    }
}
const logIn = (user)=>{
    let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json"
            },
            body: JSON.stringify({
                username: user.username,
                password: user.password  
            })}
    return ((dispatch)=>{
        dispatch(LOG_IN_START);
       
        fetch("http://localhost:3000/login",config).then(res=>res.json()).then(user =>{
        user = user.data.attributes
        dispatch({type: "LOG_IN",user})
        }).catch(error=>window.alert("incorrent username or password"))
    })
}
