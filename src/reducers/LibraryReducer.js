

export default function LibraryReducers(
    state={libraries:[],librariesInView:[],bookLibraries:[],libraryInView:null},
    action){

        switch(action.type){
          case "ALL_LIBRARIES":
            return {...state,libraries: action.libraries}
        case "LIBRARIES_IN_VIEW":
        return{...state,librariesInView: action.libraries}
        case "ALL_BOOK_LIBRARIES":
            return{...state,bookLibraries: action.books}
        case "LIBRARY_IN_VIEW":
        debugger
            return{...state,libraryInView: action.library}
            default:
                return state
        }
    }
    