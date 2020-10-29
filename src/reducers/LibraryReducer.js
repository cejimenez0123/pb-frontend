

export default function LibraryReducers(
    state={libraries:[],librariesInView:[],bookLibraries:[],libraryInView:null,libraryFollowers: []},
    action){

        switch(action.type){
          case "ALL_LIBRARIES":

            return {...state,libraries: action.libraries}
        case "LIBRARIES_IN_VIEW":
       
        return{...state,librariesInView: action.libraries}
        case "LIBRARY_FOLLOWERS":
    
        return{...state,libraryFollowers: action.follows}
        case "ALL_BOOK_LIBRARIES":
  
            return{...state,bookLibraries: action.books}
        case "LIBRARY_IN_VIEW":
     
            return{...state,libraryInView: action.library}
            default:
                return state
        }
    }
    