import axios from 'axios';

export const START_FETCH = 'START_FETCH';
export const SUCCESSFUL_FETCH = 'SUCCESSFUL_FETCH';
export const FAILED_FETCH = 'FAILED_FETCH';
export const ADD_SMURF = 'ADD_SMURF';
export const ERROR_VALUE = 'ERROR_VALUE';

export const fetchSmurfs = () => {
    return ({ type: START_FETCH });
    // axios
    //     .get('http://localhost:3333/smurfs')
    //     .then(res =>
    //         dispatch({ type: SUCCESSFUL_FETCH, payload: res.data.results })
    //     )
    //     .catch(err => 
    //         dispatch({ type: FAILED_FETCH, payload: err })
    //     );
};

export const successfulFetch = smurfs => {
    return({type:SUCCESSFUL_FETCH, payload: smurfs});
}

export const failedFetch = error => {
    return({type:FAILED_FETCH, payload: error});
}

export const addSmurf = (newSmurf) => {
    return {
        type: ADD_SMURF,
        payload: newSmurf
    }
}

export const errorValue = (error) => {
    return {
        type: ERROR_VALUE,
        payload: error
    }
}




//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.