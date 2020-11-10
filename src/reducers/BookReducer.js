export default function BookReducer(
    state={booksInView:[],bookInView: null,showEditor:"none", books: [],booksOfUser: [],bookFollowers: [], followedBooksOfUser:[],bookAccessors:[],bookAccessOfUser:[]},
    action){

        switch(action.type){
            case "BOOK_IN_VIEW":
   
                return {...state,bookInView: action.book}
            case "BOOKS_IN_VIEW":
                return{ ...state, booksInView: action.books}
            case "BOOK_FOLLOWERS":
            
                return {...state, bookFollowers: action.follows}
            case "ALL_BOOKS":

                return{...state, books: action.books}
            case "SHOW_EDITOR":
            debugger
                return {...state,showEditor: action.show}
            case "BOOKS_OF_USER":
          
                return{...state,booksOfUser: action.books}
            case "USERS_FOLLOWED_BOOKS":
            return{...state,followedBooksOfUser: action.follows}
            case "BOOK_ACCESSORS":
            return {...state,bookAccessors: action.accessors}
            case "BOOK_ACCESS_OF_USER":
            return{...state, bookAccessOfUser: action.accessors}
            default: 
            return state
        }
    }