
export default function UserReducer(
    state={users: [],
        currentUser: {},
        followedUsers: [],
        userFollowers: [],
        userInView: {},
    loggedIn: false,
requesting: false},
    action){
    
        switch (action.type){
            case "SIGN_UP_START":
                
                return {...state,requesting: true,loggedIn: false}
            // case "SIGN_UP":    
            //     let user = action.user
            
            //     return {...state,currentUser: user, loggedIn: true }
            case "USER_IN_VIEW":
            console.log(action.user)
            return {...state,userInView: action.user}
            case "LOG_IN_START":
                return {...state,requesting: true}
            case "LOG_IN":
                
                localStorage.setItem("currentUser",action.user.id) 
               
                return{...state,currentUser: action.user, loggedIn: true, requesting: false}
            case "GET_USERS_START":
                return {...state,requesting: true}
            case "GET_USERS":
              
                let m =action.users
                return {...state, users: m, currentUser: state.currentUser,
                loggedIn: state.loggedIn}
            case "START_SET_CURRENT_USER":
                return {...state,requesting: true}
            case "SET_CURRENT_USER":
                return{...state,currentUser: action.user, loggedIn: true,requesting: false}
            case "FOLLOWED_USERS":
         
                return {...state,followedUsers: action.follows}
            case "USERS_FOLLOWERS":
            
                return {...state, userFollowers: action.follows}
            case "END_CURRENT_USER": 
              
                localStorage.setItem("currentUser","")
                return{...state,currentUser:null,loggedIn: false} 
                
            case "GET_USERS_START":
                return{...state}
            default:
                return state
        }

}