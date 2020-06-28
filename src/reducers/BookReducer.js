export default function BookReducer(
    state={currentBook:null,books: []},
    action){

        switch(action.type){
            case "SET_CURRENT_BOOK":
            return {...state,currentBook: action.book}
            case "ALL_BOOKS":
            return{...state, books: action.books}
        }
    }