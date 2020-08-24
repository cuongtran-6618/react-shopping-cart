import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct, removeProduct } from "../cart/cartSlice";
import { updateProductInventory } from "./productsSlice";

const Product = (product) => {
	const dispatch = useDispatch();

	const handleAddToCart = () => {
		dispatch(updateProduct(product, 1));
		dispatch(updateProductInventory({ id: product.id, quantity: -1 }));
	};

	return (
		<li>
			<div>
				<div>{product.title}</div>
				<div>{product.price} €</div>
				<div>Quantity: {product.inventory}</div>
				<span
					style={{ visibility: product.inventory === 0 ? "visible" : "hidden" }}
				>
					Out of stock
				</span>
			</div>
			<div>
				<button disabled={product.inventory === 0} onClick={handleAddToCart}>
					{product.inventory === 0 ? "Out of stock" : "Add to cart"}
				</button>
			</div>
		</li>
	);
};

export default Product;
