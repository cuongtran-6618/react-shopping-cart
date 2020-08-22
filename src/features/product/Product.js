import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Product = (product) => {
	const handleAddToCart = () => {};

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
					Add to cart
				</button>
			</div>
		</li>
	);
};

export default Product;
