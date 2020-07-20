

export default function LibraryReducers(
    state={libraries:[],librariesInView:[]},
    action){

        switch(action.type){
          case "ALL_LIBRARIES":
            return {...state,libraries: action.libraries}
        case "LIBRARIES_IN_VIEW":
        return{...state,librariesInView: action.libraries}
            default:
                return state
        }
    }
    