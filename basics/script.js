import { createStore } from "redux";

const store = createStore(reducer);
//this returns an object with some methods

//reducer function is passed as a parameter and initial state os passed as an agrument fpr the reducer funtion

function reducer(state = initialState, action) {}
//reducer is used to update your state

store.dispatch({ type: "post" });
//dispatch : helps us to access the reducer

store.getState();
//getState : returns the curremt state
