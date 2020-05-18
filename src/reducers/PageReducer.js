import { startPage } from "../actions/PageActions"

export default function PageReducer(
    state={pages:[],currentPage: null, myPages:[],pagesFrom:[]},
    action){

        switch(action.type){
            case "SAVE_PAGE":
                debugger
                return { currentPage: action.page.attributes,...state }
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
    