import {useProducts} from "../hooks/useProducts";
import {useNavigate} from "react-router-dom";

export const ProductsList = () => {
	const products = useProducts();
	const navigate = useNavigate();

	return (
		<table>
			<thead>
				<tr>
					<td>Name</td>
					<td>Description</td>
				</tr>
			</thead>
			<tbody>
			{products.map(product => (
				<tr key={product.id} onClick={() => { navigate(`/${product.id}`)}}>
					<td>{product.title}</td>
					<td>{product.description}</td>
				</tr>
			))}
			</tbody>
		</table>
	);
};