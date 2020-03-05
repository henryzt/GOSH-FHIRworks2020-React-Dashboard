import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const GlobalContext = React.createContext("light");

class Site extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GlobalContext.Provider value={{ isMobile: false }}>
        <App />
      </GlobalContext.Provider>
    );
  }
}

ReactDOM.render(<Site />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
