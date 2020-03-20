import { FETCH_SMURFS, UPDATE_SMURFS, SET_ERROR, ADD_SMURF } from '../actions/actions'

export const initialState = {
    smurfs: [
        {
            name: "Brainey",
            age: 200,
            height: "5cm",
            id: 99
        },
        {
            name: "Brainey",
            age: 200,
            height: "5cm",
            id: 99
        },
        {
            name: "Brainey",
            age: 200,
            height: "5cm",
            id: 99
        }
    ],
    isFetchingData: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS:
            return {
                ...state,
                isFetchingData: true,
                smurfs: [...state.smurfs, action.payload]
            }
        case UPDATE_SMURFS:
            return {
                ...state,
                smurfs: action.payload,
                isFetchingData: false
            }
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            }
        case ADD_SMURF:
            console.log('works', action.payload)
            return {
                ...state,
                smurfs: [
                    ...state.smurfs,
                    action.payload
                ]
            }
        default:
            return state
    }
}