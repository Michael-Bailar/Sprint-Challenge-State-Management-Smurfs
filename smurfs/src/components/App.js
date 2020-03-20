import React from "react";
import "./App.css";

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { reducer } from '../reducers/reducer'
import Villiage from './Villiage'
import Header from './Header'
import SmurfForm from "./SmurfForm";


const store = createStore(reducer, applyMiddleware(thunk))


const App = props => {
  return (
    <Provider store={store}>
    <div className="App">
      <Header />
      <SmurfForm />
      <h2>Smurf City</h2>
      <div className='villiage-container'>
        <Villiage />
      </div>
    </div>
  </Provider>
  );
}


export default App;



/*
I can set the initial state as an empty array.  same as the card app. 
When I load the app, I need to get it to load the initial state
THEN grab the data from the server and set that to state. 
(JUST NEED TO CONNECT EVERYTHING HERE)
I need to add a form that adds a smurf to the smurfs state.

*/