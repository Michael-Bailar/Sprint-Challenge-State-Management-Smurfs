import React, { useEffect } from "react";
import "./App.css";
import {connect} from 'react-redux'

import Villiage from './Villiage'
import Header from './Header'
import SmurfForm from "./SmurfForm";
import { fetchSmurfs } from "../actions/actions";







const App = props => {

  useEffect(() => {
    props.fetchSmurfs();
  }, [])

  return (
 
    <div className="App">
      <Header />
      <SmurfForm />
      <h2>Smurf City</h2>
      <div className='villiage-container'>
        <Villiage />
      </div>
    </div>

  );
}


const mapStateToProps = state => {
  return {
    smurfs:state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(App);



/*
I can set the initial state as an empty array.  same as the card app. 
When I load the app, I need to get it to load the initial state
THEN grab the data from the server and set that to state. 
(JUST NEED TO CONNECT EVERYTHING HERE)
I need to add a form that adds a smurf to the smurfs state.

FORM WORKS

*/