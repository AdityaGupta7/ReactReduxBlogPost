import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [], //all the posts coming from the action in which we have the fetch request
    item: {} //the single new post-item we add
}

export default function(state = initialState, action){//action is an object
    switch(action.type){
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload //append the payload to the items (posts) array of the state object
            };
        case NEW_POST:
            return{
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}