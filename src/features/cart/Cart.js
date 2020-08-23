import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

export const Cart = () => {
	const products = useSelector((state) => state.rootReducer.cart);
	const nodes =
		products.length > 0 ? (
			products.map((product) => <ProductItem key={product.id} {...product} />)
		) : (
			<div>There isn't any item in cart</div>
		);
	return (
		<div>
			<h2>Shopping cart</h2>
			<ul>{nodes}</ul>
		</div>
	);
};

export default Cart;
