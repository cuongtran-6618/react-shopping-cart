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
				<CartItem
					key={productFromStore.id}
					item={productFromStore[0]}
					quantity={item.quantity}
				/>
			);
		}
	};

	const nodes =
		cartItems.length > 0
			? cartItems.map((product) => fetchProduct(product))
			: null;

	const table = () => {
		const hasItem = cartItems.length > 0;

		if (!hasItem) {
			return null;
		}

		return (
			<table className="w-full lg:w-3/6 my-2">
				<thead className="hidden md:table-header-group">
					<tr>
						<th className="text-left">Item</th>
						<th>Price</th>
						<th>Amount</th>
						<th>Subtotal</th>
						<th></th>
					</tr>
				</thead>
				<tbody>{nodes}</tbody>
			</table>
		);
	};

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
		<div className="px-2 m-2">
			<h2 className="border-top py-2 font-bold">Shopping cart</h2>
			<div className="italic text-xs py-1">
				<span>{message}</span>
			</div>
			{table()}
		</div>
	);
};

export default Cart;
