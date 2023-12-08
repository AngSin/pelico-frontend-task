import {useEffect, useState} from "react";
import {Product} from "../types/Product";
import {api} from "../api";

export const useProducts = () => {
	const [products, setProducts] = useState<Product[]>([]);

	const fetchProducts = async () => {
		const fetchedProducts = await api.getAllProducts();
		setProducts(fetchedProducts);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return products;
};