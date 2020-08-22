import { createSlice } from "@reduxjs/toolkit";
import database from "../../db/database";

const productsSlice = createSlice({
	name: "products",
	initialState: database,
	reducers: {
		loadProduct: (state, action) => {
			console.log(state, action);
			return database;
		},
	},
});

export const { loadProduct } = productsSlice.actions;
export default productsSlice.reducer;
