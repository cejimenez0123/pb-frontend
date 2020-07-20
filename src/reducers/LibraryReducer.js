

export default function LibraryReducers(
    state={libraries:[]},
    action){

        switch(action.type){
          case "ALL_LIBRARIES":
            return {...state,libraries: action.libraries}
            default:
                return state
        }
    }
    