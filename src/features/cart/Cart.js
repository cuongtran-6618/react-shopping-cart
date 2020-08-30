import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export const Cart = () => {
	const defaultCartMessage = "There isn't any item in cart";

	const cartItems = useSelector((state) => state.cart);

	const productCollection = useSelector((state) => {
		return state.products;
	});
	const [message, setMessage] = useState(defaultCartMessage);

	const fetchProduct = (item) => {
		const productFromStore = productCollection.filter(
			(product) => product.id === item.id
		);

		if (productFromStore) {
			return (
				<li>
					<CartItem
						key={productFromStore.id}
						item={productFromStore[0]}
						quantity={item.quantity}
					/>
				</li>
			);
		}
	};

	const nodes =
		cartItems.length > 0
			? cartItems.map((product) => fetchProduct(product))
			: null;

	useEffect(() => {
		getMessage(cartItems);
	});

	const getMessage = (products) => {
		if (products.length === 0) {
			setMessage(defaultCartMessage);
			return;
		}

		const numberOfProduct = products.reduce(
			(previous, current) => previous + current.quantity,
			0
		);

		const text =
			numberOfProduct > 1
				? `There are ${numberOfProduct} product in cart`
				: `There is 1 product in cart`;

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
