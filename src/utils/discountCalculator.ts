export const calculateDiscount = (discountPercentage: number, price: number): number => {
    const discountAmount = (discountPercentage / 100) * price;
    return price - discountAmount;
}