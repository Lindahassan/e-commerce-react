import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import {Switch , Route } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
   <Switch>
     <Route exact path ="/" component={Home}  />
     <Route exact path ="/Products" component={Products}  />
      </Switch>
    </>
  );
}

export default App;
