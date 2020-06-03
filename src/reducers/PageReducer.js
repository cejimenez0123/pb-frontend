
export default function PageReducer(
    state={pages:[],currentPage: null, myPages:[],pagesFrom:[],inbox:[],requesting: false},
    action){

        switch(action.type){
            case "START_SAVE_PAGE":
                return {requesting: true, ...state}
            case "SAVE_PAGE":
                
                let page = action.page
                let newState= { ...state ,currentPage: page }
                
                return newState
            case "MY_INBOX":
                debugger
                return{...state,inbox: action.inbox}
            case "GET_PAGE":
              console.log("GET PAGE")
              debugger
              localStorage.setItem("currentPage",action.page)
                return {...state, currentPage: action.page}
            case "GET_ALL_PAGES":
                debugger 
                return {...state,pages: action.pages}
            case "GET_MY_PAGES":
                debugger
                return {...state, myPages: action.pages}
            default:
                return state
        }
    }
    