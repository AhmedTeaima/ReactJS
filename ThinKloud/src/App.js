import React from "react";
import { Route } from "react-router-dom";
import AddOrder from "./components/AddOrder";
import AddMeal from "./components/AddMeal";
import Reports from "./components/Reports";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from "./components/Tabs";

function App() {
  return (
    <div className="container my-5">
      Resturant Order
      <Tabs />
      <Route path="/" exact component={AddOrder} />
      <Route path="/addmeal" exact component={AddMeal} />
      <Route path="/reports" exact component={Reports} />
    </div>
  );
}

export default App;
