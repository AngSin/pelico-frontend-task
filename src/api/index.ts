import axios from 'axios';
export const api = {
	getAllProducts: async () => {
		const res = await axios.get('https://fakestoreapi.com/products');
		return res.data;
	},

	getProduct: async (id: number) => {
		const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
		return res.data;
	},
};