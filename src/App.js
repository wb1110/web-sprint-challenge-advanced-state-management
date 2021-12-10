import React, { useEffect } from "react";
import { connect } from "react-redux"
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import { fetchSmurfs, successfulFetch, failedFetch } from "./actions";
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = (props)=> {

useEffect(() => {
  props.fetchSmurfs();
  axios
  .get('http://localhost:3333/smurfs')
  .then(res =>
      // dispatch({ type: SUCCESSFUL_FETCH, payload: res.data })
      props.successfulFetch(res.data)
  )
  .catch(err => 
      // dispatch({ type: FAILED_FETCH, payload: err })
      props.failedFetch(err)
      );
}, []);

  return (
    <div className="App">
      <Header />

      <main>
        <SmurfList/>
        <AddForm/>
      </main>
    </div>
  );
}

const mapActionsToProps = () => {
  return {
    fetchSmurfs,
    successfulFetch,
    failedFetch
  }
}

export default connect(null, mapActionsToProps())(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.