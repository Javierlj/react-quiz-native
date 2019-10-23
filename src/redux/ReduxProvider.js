import { Provider } from "react-redux";
import { createStore } from "redux";

import React, { Component } from "react";
import GlobalState from "./reducers";
import Game from "../components/Game/Game";
import AppContainer from "../components/Navigation/Navigation";

export default class ReduxProvider extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      score: 0,
      finished: false,
      questions: [],
      currentQuestion: 0,
      loading: true
    };
    this.store = this.configureStore();
  }

  configureStore() {
    const reduxDevTools =
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__();
    return createStore(GlobalState, this.initialState, reduxDevTools);
  }

  render() {
    return (
      <Provider store={this.store}>
        <AppContainer />
      </Provider>
    );
  }
}
