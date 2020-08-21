import { Product } from "../product/types";

export const ADD_TO_CART = "ADD_TO_CART";
export const UPDATE_CART = "UPDATE_CART";
export const CLEAR_CART = "CLEAR_CART";

export interface ShoppingCartItem {
	item: Product;
	quantity: number;
}
