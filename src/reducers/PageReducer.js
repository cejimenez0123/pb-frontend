
export default function PageReducer(
    state={pages:[], myPages:[],pagesFrom:[],inbox:[],requesting: false, pagesInView: [],pageCommentsInView:[]},
    action){

        switch(action.type){
            case "START_SAVE_PAGE":
                return {requesting: true, ...state}
            case "SAVE_PAGE":
                
                let page = action.page
                let newState= { ...state ,currentPage: page }
                
                return newState
                case "PAGE_COMMENTS":
                debugger
                return {...state, pageCommentsInView: action.comments}
            case "MY_INBOX":
              
                return{...state,inbox: action.inbox}
            case "GET_PAGE":
              console.log("GET PAGE")
       
              localStorage.setItem("currentPage",action.page)
                return {...state, currentPage: action.page}
            case "GET_ALL_PAGES":
        
                return {...state,pages: action.pages}
            case "GET_MY_PAGES":
         
                return {...state, myPages: action.pages}
            default:
                return state
        }
    }
    