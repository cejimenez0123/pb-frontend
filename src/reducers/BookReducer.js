export default function BookReducer(
    state={booksInView:[],bookInView: null,books: [],booksOfUser: [],bookFollowers: [], followedBooks:[]},
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

            case "BOOKS_OF_USER":
          
                return{...state,booksOfUser: action.books}
            case "USERS_FOLLOWED_BOOKS":
            return{...state,followedBooks: action.follows}
            default: 
            return state
        }
    }