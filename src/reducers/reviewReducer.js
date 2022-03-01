import cuid from 'cuid';
export const cuidFn = cuid;

function reviewReducer(state = [], action){
    switch(action.type){

        case "ADD_REVIEW":{
            const review = {
                id: cuidFn(),
                text: action.text
            }
            return{
                ...state, reviews:[...state.reviews, review]
            }
        }

        case "DELETE_REVIEW":{
            return{
                reviews: state.reviews.filter(review => review.id !== action.id)
            }
        }

        default:
            return state;
    }

}

export default reviewReducer