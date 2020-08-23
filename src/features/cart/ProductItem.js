import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct, removeProduct } from "../cart/cartSlice";

const ProductItem = (product) => {
	const dispatch = useDispatch();

	const handleAddToCart = () => {
		console.log("click add to cart button");
		dispatch(updateProduct(product, 1));
	};

	return (
		<li>
			<div>
				<div>{product.title}</div>
				<div>{product.price} €</div>
				<div>Quantity: {product.quantity}</div>
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

export default ProductItem;
