// import  { useEffect, useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Cart, Category } from "./pages/Parent_Index";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import store from "./store/Store";
import { Provider } from "react-redux";
import OnloadMessage from "./components/OnloadMessage";

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route>
              <Route path="/" exact element={<Home />} />
              <Route path="/category/:id" element={<Category />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
          
          </Routes>
      <OnloadMessage/>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
 