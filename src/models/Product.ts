import { calculateDiscount } from '../utils/discountCalculator.ts';

export class Product {
    id: number;
    name: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;

    constructor(id: number, name: string, description: string, category: string, price: number, discountPercentage: number, rating: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.rating = rating;
    }

    displayDetails(): void {
        console.log(`Product ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Description: ${this.description}`);
        console.log(`Category: ${this.category}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
        console.log(`Rating: ${this.rating}/5`);
    }

    getPriceWithDiscount(): number {
        return calculateDiscount(this.discountPercentage, this.price);
    }
}