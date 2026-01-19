import { Cart } from './components/Cart.js';
import { ProductManager } from './components/ProductManager.js';
import { MOCK_PRODUCTS } from './utils/data.js';
class App {
    constructor() {
        this.cart = new Cart();
        this.productManager = new ProductManager('product-list', this.cart);
        this.searchInput = document.getElementById('search-input');
        this.categoryFilter = document.getElementById('category-filter');
        this.init();
    }
    init() {
        this.productManager.render(MOCK_PRODUCTS);
        this.setupEventListeners();
        console.log("E-commerce application started successfully.");
    }
    setupEventListeners() {
        this.searchInput.addEventListener('input', () => this.handleFilter());
        this.categoryFilter.addEventListener('change', () => this.handleFilter());
    }
    handleFilter() {
        const searchTerm = this.searchInput.value;
        const category = this.categoryFilter.value;
        this.productManager.filterProducts(MOCK_PRODUCTS, searchTerm, category);
    }
}
window.addEventListener('DOMContentLoaded', () => {
    new App();
});
//# sourceMappingURL=app.js.map