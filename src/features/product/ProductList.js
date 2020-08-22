import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

export const ProductList = () => {
	const products = useSelector((state) => state.rootReducer.products);

	return (
		<div>
			<h2>Catalog</h2>
			<ul>
				{products.map((product) => {
					return <Product key={product.id} {...product} />;
				})}
			</ul>
		</div>
	);
};

export default ProductList;
