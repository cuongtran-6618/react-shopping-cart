import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "../features/product/productsSlice";
import cartReducer from "../features/cart/cartSlice";

export default combineReducers({
	products: productReducer,
	cart: cartReducer,
});
