
export default function UserReducer(
    state={users: [],
        currentUser: null,
    loggedIn: false,
requesting: false },
    action){
    
        switch (action.type){
            case "SIGN_UP_START":
                
                return {...state,users:[...state.users],loggedIn: false}
            case "SIGN_UP":    
                let user = action.user
                return {...state, users: [...state.users.concat(user)],
                    currentUser: user, loggedIn: true }
            case "LOG_IN_START":
                return {...state}
            case "LOG_IN":
                localStorage.setItem("currentUser",action.user.id)
                return {...state,users:[state.users],currentUser: action.user, loggedIn: true}
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
            
            return{...state,currentUser: action.user, loggedIn: true}
                case "END_CURRENT_USER": 
                return{...state,currentUser:null,loggedIn: false} 
                
            case "GET_USERS_START":
                return{...state}
            
            
        
            default:
                return state
        }

}