import { Product } from "./product/types";
import { ShoppingCartItem } from "./cart/types";

// store state which manage the whole
export interface storeState {
	catalog: Product[];
	cart: ShoppingCartItem[];
	total: number;
}
