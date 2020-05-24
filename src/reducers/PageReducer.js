
export default function PageReducer(
    state={pages:[],currentPage: null, myPages:[],pagesFrom:[],requesting: false},
    action){

        switch(action.type){
            case "START_SAVE_PAGE":
                return {requesting: true, ...state}
            case "SAVE_PAGE":
                
                let page = action.page
                let newState= { ...state ,currentPage: page }
                
                return newState
            case "GET_PAGE":
                
                return {...state, currentPage: action.page}
            case "GET_ALL_PAGES":
                debugger 
                return {...state,pages: action.pages}
            case "GET_MY_PAGES":
                return {...state, myPages: action.pages}
            default:
                return state
        }
    }
    