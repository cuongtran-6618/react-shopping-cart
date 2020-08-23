import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: [],
	reducers: {
		updateProduct: {
			prepare: (product, quantity) => {
				console.log(product);

				return {
					payload: {
						id: product.id,
						quantity: quantity,
					},
				};
			},
			reducer: (state, action) => {
				console.log(action.payload);
				// add new record to state
			},
		},
		removeProduct: (state, action) => {
			console.log("removeProduct was triggered", state, action);
		},
	},
});

export const { updateProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
