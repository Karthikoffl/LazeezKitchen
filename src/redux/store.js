import { createStore } from "redux";
import reducer from "./reducers/index";
// import { configureStore } from '@reduxjs/toolkit'

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState);
  return store;
}
