import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: [],
	reducers: {
		updateProduct: {
			prepare: (product, quantity) => {
				return {
					payload: {
						id: product.id,
						quantity: quantity,
					},
				};
			},
			reducer: (state, action) => {
				const product = action.payload;

				const productId = product.id;

				const productIndex = state.findIndex((item) => item.id === productId);

				// add new record to state
				if (productIndex === -1) {
					state.push(product);
				} else {
					state[productIndex]["quantity"] += product.quantity;
				}

				return state;
			},
		},

		removeProduct: (state, action) => {
			return state.filter((item) => {
				return item.id !== action.payload.id;
			});
		},
	},
});

export const { updateProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
