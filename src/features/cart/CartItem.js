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

	return (
		<div>
			<Product title={item.title} price={item.price} quantity={quantity} />
			<button disabled={quantity <= 1} onClick={handleDecreaseItem}>
				-
			</button>
			<span>{quantity}</span>
			<button disabled={item.inventory === 0} onClick={handleIncreaseItem}>
				+
			</button>

			<button onClick={handleRemoveCartItem}>Remove</button>
		</div>
	);
};

export default CartItem;
