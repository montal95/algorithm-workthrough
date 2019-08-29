import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Add2Num from "./Add2Num";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route exact path="/Add2Num" component={Add2Num}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
