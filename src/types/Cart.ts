import {Product} from "./Product";

export type CartItem = Product & {
	quantity: number;
}

export type Cart = {
	items: CartItem[];
	// total: number;
};