export default function BookReducer(
    state={currentPage:null},
    action){

        switch(action.type){
            case "SET_CURRENT_BOOK":
            return {...state,currentBook: action.book}
        }
    }