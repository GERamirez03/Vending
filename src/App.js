import React from 'react';
import './App.css';

import { BrowserRouter, Route } from "react-router-dom";

import Soda from "./Soda";
import Candy from "./Candy";
import Chocolate from "./Chocolate";
import VendingMachine from "./VendingMachine";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine/>
        </Route>
        <Route exact path="/soda">
          <Soda/>
        </Route>
        <Route exact path="/candy">
          <Candy/>
        </Route>
        <Route exact path="/chocolate">
          <Chocolate/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
