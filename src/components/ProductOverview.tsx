import {useContext, useEffect, useState} from "react";
import {Product} from "../types/Product";
import {useNavigate, useParams} from "react-router-dom";
import {api} from "../api";
import {CartContext} from "../context/CartContext";

export const ProductOverview = () => {
	const { addToCart } = useContext(CartContext);
	const navigate = useNavigate();

	const [product, setProduct] = useState<Product>();
	const { id } = useParams();
	const fetchProduct = async() => {
		const fetchedProduct = await api.getProduct(Number(id));
		setProduct(fetchedProduct);
	};

	useEffect(() => {
		fetchProduct();
	}, []);
	return (
		<div>
			{product ? (
				<>
					<h1>{product.title}</h1>
					<button onClick={() => {addToCart(product)}}>Add To cart</button>
					<button onClick={() => navigate('/cart')}>Go to Cart</button>
				</>
			) : <span>Loading...</span>}
		</div>
	)
};