
export default function PageReducer(
    state={pages:[],currentPage: null, myPages:[],pagesFrom:[],requesting: false},
    action){

        switch(action.type){
            case "START_SAVE_PAGE":
                return {requesting: true, ...state}
            case "SAVE_PAGE":
                debugger
                let page = action.page
                return { currentPage: page ,...state }
            case "GET_PAGE":
                return {...state, currentPage: action.page}
            case "GET_ALL_PAGES": 
                return {...state,pages: action.pages}
            case "GET_MY_PAGES":
                return {...state, myPages: action.pages}
            default:
                return state
        }
    }
    