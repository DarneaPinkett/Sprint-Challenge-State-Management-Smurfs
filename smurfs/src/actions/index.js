import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";

export const getSmurfs = () => dispatch => {
    dispatch({type: FETCH_DATA_START});
    axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
        console.log("show smurf", res);
        dispatch({type: FETCH_DATA_SUCCESS, payload: res.data});
    })
    .catch(err => {
        console.log(err.res);
        dispatch({type: FETCH_DATA_FAIL, payload: `${err.res.status} ${err.res.data}`});
    });
};

export const POST_DATA_START = "POST_DATA_START";
export const POST_DATA_SUCCESS = "POST_DATA_SUCCESS";
export const POST_DATA_FAIL = "POST_DATA_FAIL";

export const addSmurf = newSmurf => dispatch => {
    dispatch({type: POST_DATA_START});
    axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
        console.log("success", res);
        dispatch({type: POST_DATA_SUCCESS, payload: res.data});
    })
    .catch(err => {
        console.log(err);
        dispatch({type: POST_DATA_FAIL, payload: err});
    })
}