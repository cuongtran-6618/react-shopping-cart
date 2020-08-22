import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: [],
	reducers: {
		updateProduct: (state, action) => {
			console.log("updateProduct was triggered", state, action);
		},
		removeProduct: (state, action) => {
			console.log("removeProduct was triggered", state, action);
		},
	},
});

export default { updateProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
