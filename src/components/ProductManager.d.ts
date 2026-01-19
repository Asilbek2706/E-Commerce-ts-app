import { Product } from '../models/Product.js';
import { Cart } from './Cart.js';
export declare class ProductManager {
    private containerId;
    private cart;
    constructor(containerId: string, cart: Cart);
    render(products: Product[]): void;
    private createCard;
    filterProducts(products: Product[], searchTerm: string, category: string): void;
}
//# sourceMappingURL=ProductManager.d.ts.map