import { NetworkError } from '../utils/errorHandler.ts';

export const fetchProducts = async () => {
    const response = await fetch('https://dummyjson.com/products');

    if (!response.ok) {
        throw new NetworkError(`Failed to fetch products: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.products;
}