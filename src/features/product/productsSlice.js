import { createSlice } from "@reduxjs/toolkit";
import database from "../../db/database";

const initialProduct = database;

const productsSlice = createSlice({
	name: "products",
	initialState: initialProduct,
	reducers: {
		updateProductInventory: (state, action) => {
			const product = state.find((item) => item.id === action.payload.id);
			if (product) {
				product.inventory += action.payload.quantity;
			}
			return state;
		},
	},
});

export const { loadProduct, updateProductInventory } = productsSlice.actions;
export default productsSlice.reducer;
