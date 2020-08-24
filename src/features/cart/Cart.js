import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

export const Cart = () => {
	const products = useSelector((state) => state.cart);
	const [message, setMessage] = useState("There isn't any item in cart");

	const nodes =
		products.length > 0
			? products.map((product) => <ProductItem key={product.id} {...product} />)
			: null;

	useEffect(() => {
		console.log("render");
		getMessage(products);
	});

	const getMessage = (products) => {
		if (products.length === 0) {
			return;
		}

		console.log(products);

		const numberOfProduct = products.reduce(
			(previous, current) => previous + current.quantity,
			0
		);

		const text =
			numberOfProduct > 1
				? `There are ${numberOfProduct} product in cart`
				: `There is 1 product in cart`;

		console.log(numberOfProduct, text);

		setMessage(text);
	};

	return (
		<div>
			<h2>Shopping cart</h2>
			<h3>{message}</h3>
			<ul>{nodes}</ul>
		</div>
	);
};

export default Cart;
