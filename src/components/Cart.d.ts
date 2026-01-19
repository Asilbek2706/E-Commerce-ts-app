import { Product } from '../models/Product.js';
import { Cart } from './Cart.js';
export declare class ProductManager {
    private containerId;
    private cart;
    constructor(containerId: string, cart: Cart);
    render(products: Product[]): void;
    filterProducts(products: Product[], searchTerm: string, category: string): void;
    private createProductCard;
    private truncateText;
    private animateButton;
}
//# sourceMappingURL=Cart.d.ts.map