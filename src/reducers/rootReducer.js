import { combineReducers } from 'redux';

import restaurantReducer from "./restaurantReducer"
import reviewReducer from "./reviewReducer"
export default combineReducers(restaurants,reviews)
 
function rootReducer(){
    combineReducers({restaurants: restaurantReducer,reviews: reviewReducer})
}


export default rootReducer;
