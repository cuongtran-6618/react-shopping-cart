import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import BuyButton from "./BuyButton";

export const ProductList = () => {
	const products = useSelector((state) => {
		return state.products;
	});

	return (
		<div className="p-2">
			<h2 className="text-center text-3xl font-bold">Catalog</h2>
			<div className="sm:flex xs:flex-auto justify-between content-around">
				{products.map((product) => {
					return (
						<div key={product.id} className="flex-1 m-2">
							<Product
								title={product.title}
								price={product.price}
								quantity={product.inventory}
							/>
							<BuyButton {...product} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ProductList;
