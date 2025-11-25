import { Product } from "./models/Product.ts";
import { fetchProducts } from "./services/apiServices.ts";
import { calculateTax } from "./utils/taxCalculator.ts";

const prepareProducts = async (): Promise<Product[] | undefined> => {
    try {
        let processedProducts: Product[] = [];

        const promisedProducts = await fetchProducts();

        promisedProducts.forEach((p: any) => {
            const productItem = new Product(p.id, p.title, p.description, p.category, p.price, p.discountPercentage, p.rating);
            processedProducts.push(productItem);
        })

        return processedProducts;
    } catch (error) {
        console.error(error);
    }
}

const listOfProducts: Product[] | undefined = await prepareProducts();

if (listOfProducts && listOfProducts.length > 0) {
    let randomIndex = Math.floor(Math.random() * listOfProducts.length);
    listOfProducts[randomIndex].displayDetails();
    console.log(`\nProduct price with discount: $${listOfProducts[randomIndex].getPriceWithDiscount()}`);
    console.log(`Product price with tax: $${calculateTax(listOfProducts[randomIndex].price, listOfProducts[randomIndex].category)}`);
}