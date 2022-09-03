import React from "react";
import ReactDOM from "react-dom";

import { AppTest } from './app';

const App = () => {
  return (
    <div>
      <h1>Hello!!</h1>
      <h2>Welcome to your First React App..!</h2>
      <AppTest num={1}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));