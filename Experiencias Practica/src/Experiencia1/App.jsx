import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Blogs from "./Blogs";
import Contact from "./Contact";
import NoPage from "./NoPage";
import Products from "./Products";
import { FeaturedProducts } from "./FeaturedProducts";
import { NewProducts } from "./NewProducts";

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home/>}/>
                    <Route path="blogs" element={<Blogs/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="products" element={<Products/>}>
                        <Route path="featured" element={<FeaturedProducts/>}/>
                        <Route path="new" element={<NewProducts/>}/>
                    </Route>
                    <Route path="*" element={<NoPage/>}/>
                </Route> 
            </Routes>
        </BrowserRouter>
    );
}

export default App;