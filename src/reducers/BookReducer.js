export default function BookReducer(
    state={currentBook: null,books: [],booksOfUser: []},
    action){

        switch(action.type){
            case "SET_CURRENT_BOOK":
            debugger
            
            return {...state,currentBook: action.book}
            case "ALL_BOOKS":
            return{...state, books: action.books}
            case "BOOKS_OF_USER":
            return{...state,booksOfUser: action.books}
            default: 
            return state
        }
    }