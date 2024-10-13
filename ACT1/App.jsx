import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom"; //componentes clave 
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Product";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import "./App.css";

export default function App(){

  return (
    <BrowserRouter> //BrowserRouter gestiona navegacion en base a URL
      //Sin eso no se puede usar las rutas 
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>{" "}
          </li>
        </ul>
      </nav>

      <Routes> //contiene todas las rutas de la aplicacion 
        <Route path="/" element={<Home />} /> //ruta razi
        <Route path="/about" element={<About />} /> //cuando el usuario navegue a about
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

