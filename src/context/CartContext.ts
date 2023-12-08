import {createContext} from "react";
import {Product} from "../types/Product";
import {CartItem} from "../types/Cart";

export type CartContextType = {
	items: CartItem[];
	addToCart: (product: Product) => void;
	removeFromCart: (id: number) => void;
};

export const initialState = {
	items: [],
	addToCart: () => {},
	removeFromCart: () => {},

};

export const CartContext = createContext<CartContextType>(initialState)