import React from "react";
import { useDispatch } from "react-redux";
import { updateProduct, removeProduct } from "./cartSlice";
import { updateProductInventory } from "../product/productsSlice";
import Product from "../product/Product";

const CartItem = ({ item, quantity }) => {
	const dispatch = useDispatch();

	const triggerUpdateInventory = (item, qty) => {
		dispatch(updateProductInventory({ id: item.id, quantity: qty }));
	};

	const updateStore = (item, cartQuantity, inventoryQuantity) => {
		// update cart item's quantity
		dispatch(updateProduct(item, cartQuantity));
		triggerUpdateInventory(item, inventoryQuantity);
	};

	const handleRemoveCartItem = () => {
		dispatch(removeProduct({ id: item.id }));
		triggerUpdateInventory(item, quantity);
	};

	const handleIncreaseItem = () => {
		updateStore(item, 1, -1);
	};

	const handleDecreaseItem = () => {
		updateStore(item, -1, 1);
	};

	const subtotal = () => {
		const subtotal = item.price * quantity;
		let subtotalText = subtotal.toString().split(".");
		const fractional = subtotalText[1];

		return fractional && fractional.length > 2
			? subtotalText[0].concat(".", fractional.substring(0, 2))
			: subtotal;
	};

	return (
		<tr>
			<td className="w-full sm:w-1/3 block sm:table-cell py-4">
				<Product title={item.title} price={null} quantity={null} />
			</td>
			<td className="hidden sm:w-1/6 sm:table-cell text-center m-2">
				{item.price}
			</td>
			<td className="w-2/5 sm:w-1/6 text-center inline-block sm:table-cell p-2">
				<div className="flex justify-center">
					<button
						className={`bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ${
							quantity <= 1 ? "cursor-not-allowed opacity-50" : ""
						}`}
						disabled={quantity <= 1}
						onClick={handleDecreaseItem}
					>
						-
					</button>

					<div className="p-1 m-1 w-8">{quantity}</div>

					<button
						className={`bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ${
							item.inventory === 0 ? "cursor-not-allowed opacity-50" : ""
						}`}
						disabled={item.inventory === 0}
						onClick={handleIncreaseItem}
					>
						+
					</button>
				</div>
			</td>
			<td className="w-2/5 sm:w-1/6 text-center inline-block sm:table-cell p-2">
				{subtotal()} €
			</td>
			<td className="w-1/5 sm:w-1/6 text-center inline-block sm:table-cell p-2">
				<button onClick={handleRemoveCartItem}>Remove</button>
			</td>
		</tr>
	);
};

export default CartItem;
