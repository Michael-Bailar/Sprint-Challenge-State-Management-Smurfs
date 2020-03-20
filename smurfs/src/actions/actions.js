import axios from 'axios'

// for initial data collection axios call
export const FETCH_SMURFS = 'FETCH_SMURFS'
export const UPDATE_SMURFS = 'UPDATE_SMURFS'
export const SET_ERROR = 'SET_ERROR'

//for changes in the app
export const ADD_SMURF = 'ADD_SMURF'

//axios call for data
export const fetchSmurfs = () => dispatch => {
    dispatch ({ type: FETCH_SMURFS })
    axios
        .get(`http://localhost:3333/smurfs`)
        .then(res => {
            console.log(res)
            dispatch({ type: UPDATE_SMURFS, payload: res})
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: SET_ERROR, payload: 'error fetching data from api'})
        })
}





export const addSmurf = (smurf) => {
    return { type: ADD_SMURF, payload: smurf }
}