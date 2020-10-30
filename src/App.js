import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import {
  BrowserRouter as Router,
  // Route,
  // Switch,
  // Redirect,
} from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
