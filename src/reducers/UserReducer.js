
export default function UserReducer(
    state={users: [],
        currentUser: null,
    loggedIn: false,
requesting: false },
    action){
    
        switch (action.type){
            case "SIGN_UP_START":
                
                return {...state,requesting: true,loggedIn: false}
            case "SIGN_UP":    
                let user = action.user
                debugger
                return {...state, users: [...state.users.concat(user)],
                    currentUser: user, loggedIn: true }
            case "LOG_IN_START":
                return {...state,requesting: true}
            case "LOG_IN":
                console.log("state",state)
                localStorage.setItem("currentUser",action.user.id) 
                debugger
                return{...state,currentUser: action.user, loggedIn: true, requesting: false}
            case "GET_USERS_START":
                return {...state,requesting: true}
            case "GET_USERS":
                let m =action.users.flat()
                    debugger
                return {...state, users: [m], currentUser: state.currentUser,
                loggedIn: state.loggedIn}
            case "START_SET_CURRENT_USER":
                return {...state,requesting: true}
            case "SET_CURRENT_USER":
            
            return{...state,currentUser: action.user, loggedIn: true,requesting: false}
                case "END_CURRENT_USER": 
                debugger
                localStorage.setItem("currentUser","")
                return{...state,currentUser:null,loggedIn: false} 
                
            case "GET_USERS_START":
                return{...state}
            default:
                return state
        }

}