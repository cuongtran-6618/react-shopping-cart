import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productsSlice";

export default configureStore({
	reducer: {
		products: productReducer,
	},
});
