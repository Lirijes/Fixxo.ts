import React from 'react';
import TodoProvider from './context/TodoContext';
import './Style.min.css'; //ändrat från ./App.css

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShoppingCartProvider } from './context/ShoppingCartContext'

import Home from './views/Home';
import Contact from './views/Contact';
import NotFound from './views/NotFound';
import Categories from './views/Categories';
import Compare from './views/Compare';
import Products from './views/Products';
import ProductDetails from './views/ProductDetails';
import Search from './views/Search';
import ShoppingCart from './views/ShoppingCart';
import WishList from './views/WishList';

function App() {

const App: React.FC = () => {

  return (
    <BrowserRouter>
        <TodoProvider>
        <ShoppingCartProvider>
            <Routes>
                <Route path="/" element={<Home />} /> {/* dessa gör att man kan navigera sig mellan knappar/länkar/kategorier */}
                <Route path="/contact" element={<Contact />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/compare" element={<Compare />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/search" element={<Search />} />
                <Route path="/shoppingcart" element={<ShoppingCart />} />
                <Route path="/wishlist" element={<WishList />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </ShoppingCartProvider>
        </TodoProvider>
    </BrowserRouter>
  );
}
}

export default App
