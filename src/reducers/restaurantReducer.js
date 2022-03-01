
import cuid from 'cuid';
export const cuidFn = cuid;


function restaurantReducer(state = [], action) {

    switch(action.type){

        case "ADD_RESTAURANT":{
            return[...state, action.text]
        }

        case "DELETE_RESTAURANT":{
            idx = state.findIndex(restaurant => restaurant.id === action.id)
            return[
                ...state.slice(0,idx),...state.slice(idx+1)
            ]
        }

        default:
            return state;
    }

}

export default restaurantReducer