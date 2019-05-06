import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//santity check
const aNumber = 42;
window.aNumber = aNumber;


// State - always an object (key: value pairs) - is never mutated directly
//an starter version of state
const initialState = {
    value: 1,
};
// Actions
// "increment" or "decrement" - type of transation - always have 
// by how much - payload -sometimes have
const ACTION_INCREMENT = 'increment'
const ACTION_DECREMENT = 'decrement'

//it is common practice to have action creator functions
function increment() {
    return {
        type: ACTION_INCREMENT,
    }
}
function decrement() {
    return {
        type: ACTION_DECREMENT,
    }
}
// sanity check
window.increment = increment;
window.decrement = decrement;


// Reducer - does the setState job
//always a function accepts exactly 2 arguments
//the Current state and the an action - never any global variables
//optionally - usually named for the data in the application
function counter(state=initialState, action={type: ''}) {
    //inspect the action
    //see what type it is
    // think of this way
    // if (action.type === ACTION_INCREMENT) {

    // } else if (action.type === ACCTION_DECREMENT) {

    // } else {

    // }
    // but write this
    switch(action.type) {
        case ACTION_INCREMENT:
            return {
                //...state, would be what we would use if we had more than one item in state
                value: state.value + 1
            }
        break;// get in the habit of using these even though vs code is unhappy 

        case ACTION_DECREMENT:
            return {
                value: state.value - 1
            }
        break;// they can/will help you later on even though they are not nessacary 

        default:
            return state;
        break;
    }
}
window.counter = counter;
// Store
const store = createStore(counter);
window.store = store;