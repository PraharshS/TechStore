import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/ProductsPage";
import Contact from "./pages/ContactPage";
import Cart from "./pages/CartPage";
import SingleProduct from "./pages/SingleProductPage";
import Default from "./pages/DefaultPage";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import SideBar from "./components/Sidebar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      {/* navbar  sidebar cart footer */}
      <Navbar />
      <SideBar />
      <SideCart />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:id" exact component={SingleProduct} />
        <Route path="/cart" component={Cart}></Route>
        <Route component={Default}></Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
