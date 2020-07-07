export default function BookReducer(
    state={currentBook: null,booksInView:[],books: [],booksOfUser: []},
    action){

        switch(action.type){
            case "SET_CURRENT_BOOK":
       
                return {...state,currentBook: action.book}
            case "BOOKS_IN_VIEW":
                return{ ...state, booksInView: action.books}
            
            case "ALL_BOOKS":
     
                return{...state, books: action.books}

            case "BOOKS_OF_USER":
                return{...state,booksOfUser: action.books}
            default: 
            return state
        }
    }