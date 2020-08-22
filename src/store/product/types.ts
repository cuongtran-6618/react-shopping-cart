export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export interface Product {
	id: number;
	title: string;
	price: number;
	inventory: number;
}
