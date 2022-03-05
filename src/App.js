import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import { BrowserRouter, Switch , Route } from "react-router-dom";



function App() {
  return (
    <div className="app">
     
    </div>
  );
  }
  const MainApp = () => {
    return (
      
      <BrowserRouter>
       <Navbar/>
        <Switch>
        <Route exact path ="/" component={Home}  />
       <Route exact path ="/Products" component={Products}  />
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default MainApp;
  

 
