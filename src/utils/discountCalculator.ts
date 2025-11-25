export const calculateDiscount = (discountPercentage: number, price: number): number => {
    const discountAmount = (discountPercentage / 100) * price;
    return Number((price - discountAmount).toFixed(2));
}