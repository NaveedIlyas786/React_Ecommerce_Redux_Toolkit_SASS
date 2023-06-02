import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./CategorySlice";
import modalReducer from "./ModalSlice"
import ProductReducer from "./ProductSlice"
import CartReducer from  "./CartSlice"


const store = configureStore({
  reducer: {
    category: categoryReducer,
    modal:modalReducer,
    product:ProductReducer,
    cart:CartReducer
  }
});

export default store;
