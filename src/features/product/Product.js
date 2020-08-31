import React from "react";

const Product = ({ title, price, quantity }) => {
	return (
		<div>
			<strong className="text-sm">{title}</strong>
			{price ? <div> {price} € </div> : null}
			{price ? <div>{quantity} pc</div> : null}

			<span
				className={`text-red-600 italic text-xs ${
					quantity === 0 ? "visible" : "invisible"
				}`}
			>
				Out of stock
			</span>
		</div>
	);
};

export default Product;
