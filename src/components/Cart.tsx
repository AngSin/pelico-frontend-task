import {useContext} from "react";
import {CartContext} from "../context/CartContext";
import {useNavigate} from "react-router-dom";

export const Cart = () => {
	const { items, removeFromCart } = useContext(CartContext);
	const navigate = useNavigate();
	return (
		<div>
			<div>Cart</div>
			{items.map((cartItem) => (
				<div key={cartItem.id}>
					<h3>{cartItem.title}</h3>
					<div>Quantity: {cartItem.quantity}</div>
					<button onClick={() => removeFromCart(cartItem.id)}>Delete Cart Item</button>
				</div>
			))}
			<button onClick={() => { navigate('/')}}>Go back to Product List</button>
		</div>
	)
};