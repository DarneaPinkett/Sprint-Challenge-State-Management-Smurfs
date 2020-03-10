import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL, POST_DATA_START, POST_DATA_SUCCESS, POST_DATA_FAIL } from "../actions";

const initialState = {
    smurf: [],
    error: "",
    isFetching: false
};

function Reducer(state = initialState, action) {
    console.log(state);
    switch(action.type) {
        case FETCH_DATA_START:
            return {...state, error: "", isFetching:true};
        case FETCH_DATA_SUCCESS:
            return {...state, error: "", isFetching: false, smurf: action.payload};
        case FETCH_DATA_FAIL:
            return {...state, error: action.payload, isFetching: false};
        case POST_DATA_START:
            return {...state, isFetching: true};
        case POST_DATA_SUCCESS:
            return {...state, smurf:action.payload, isFetching:false};
        case POST_DATA_FAIL:
            return {...state, isFetching: false, error: action.payload};
        default:
            return state;
    }
}

export default Reducer;