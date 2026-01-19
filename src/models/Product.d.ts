export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
}
export interface CartItem extends Product {
    quantity: number;
}
//# sourceMappingURL=Product.d.ts.map