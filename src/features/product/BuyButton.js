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
		<button disabled={product.inventory === 0} onClick={handleAddToCart}>
			Buy
		</button>
	);
};

export default BuyButton;
