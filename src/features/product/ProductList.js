import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import BuyButton from "./BuyButton";

export const ProductList = () => {
	const products = useSelector((state) => {
		return state.products;
	});

	return (
		<div>
			<h2>Catalog</h2>
			<ul>
				{products.map((product) => {
					return (
						<li key={product.id}>
							<Product
								title={product.title}
								price={product.price}
								quantity={product.inventory}
							/>
							<BuyButton {...product} />
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ProductList;
