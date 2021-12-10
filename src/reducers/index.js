import {
    START_FETCH,
    SUCCESSFUL_FETCH,
    FAILED_FETCH,
    ADD_SMURF,
    ERROR_MESSAGE
} from '../actions/index';

export const initialState = {
    smurfs: [],
    loading: false,
    error: " "
};

export const reducer = (state = initialState, action)=>{
    switch(action.type){
        case START_FETCH: {
            return {
                ...state,
                loading: true,
                error: ''
            }
        }
        case SUCCESSFUL_FETCH: {
            return {
                ...state,
                smurfs: action.payload,
                loading: false,
                error: ''
            }
        }
        case FAILED_FETCH: {
            return {
                ...state,
                error: action.payload
            }
        }
        case ADD_SMURF: {
            return {
                ...state,
                smurfs: [
                    ...state.smurfs,
                    {
                        id: action.payload.id,
                        name: action.payload.name,
                        position: action.payload.position,
                        nickname: action.payload.nickname,
                        description: action.payload.description
                    }
                ]
            }
        }
        case ERROR_MESSAGE: {
            return {
                ...state,
                error: "Error. Name, Position and Nickname are required fields"
            }
        }
        default:
            return state
    }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.