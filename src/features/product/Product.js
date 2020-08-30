import React from "react";

const Product = ({ title, price, quantity }) => {
	return (
		<div>
			<div>{title}</div>
			<div>{price} €</div>
			<div>{quantity} pc</div>
			<span style={{ visibility: quantity === 0 ? "visible" : "hidden" }}>
				Out of stock
			</span>
		</div>
	);
};

export default Product;
