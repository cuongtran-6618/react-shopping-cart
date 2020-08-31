import React from "react";
import { updateProduct } from "../cart/cartSlice";
import { updateProductInventory } from "./productsSlice";
import { useDispatch } from "react-redux";

const BuyButton = (product) => {
	const dispatch = useDispatch();

	const handleAddToCart = () => {
		dispatch(updateProductInventory({ id: product.id, quantity: -1 }));
		dispatch(updateProduct(product, 1));
	};

	return (
		<button
			className={`bg-white hover:bg-blue-600 hover:text-white text-gray-800 font-semibold py-2 px-6 my-2 border border-gray-400 rounded shadow ${
				product.inventory === 0 ? "cursor-not-allowed opacity-50" : ""
			}`}
			disabled={product.inventory === 0}
			onClick={handleAddToCart}
		>
			Buy
		</button>
	);
};

export default BuyButton;
