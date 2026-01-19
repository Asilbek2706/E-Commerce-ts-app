import { Cart } from './components/Cart.js';
import { ProductManager } from './components/ProductManager.js';
import { MOCK_PRODUCTS } from './utils/data.js';
class App {
    constructor() {
        this.cart = new Cart();
        this.productManager = new ProductManager('product-list', this.cart);
        this.searchInput = document.getElementById('search-input');
        this.categoryFilter = document.getElementById('category-filter');
        this.cartBtn = document.getElementById('cart-btn');
        this.modal = document.getElementById('cart-modal');
        this.closeBtn = document.querySelector('.close-modal');
        this.checkoutBtn = document.querySelector('.checkout-btn');
        this.init();
    }
    init() {
        this.productManager.render(MOCK_PRODUCTS);
        this.setupEventListeners();
        console.log("E-commerce application initialized.");
    }
    setupEventListeners() {
        this.searchInput.addEventListener('input', () => this.handleFilter());
        this.categoryFilter.addEventListener('change', () => this.handleFilter());
        this.cartBtn.onclick = () => {
            this.modal.style.display = 'block';
            this.cart.renderCartItems();
        };
        this.closeBtn.onclick = () => {
            this.modal.style.display = 'none';
        };
        window.onclick = (event) => {
            if (event.target === this.modal) {
                this.modal.style.display = 'none';
            }
        };
        this.checkoutBtn.onclick = () => {
            this.handleCheckout();
        };
    }
    handleFilter() {
        const searchTerm = this.searchInput.value;
        const category = this.categoryFilter.value;
        this.productManager.filterProducts(MOCK_PRODUCTS, searchTerm, category);
    }
    handleCheckout() {
        const cartItems = this.cart.getItems();
        if (cartItems.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        const totalAmount = cartItems.reduce((acc, item) => {
            return acc + (item.price * item.quantity);
        }, 0);
        const confirmation = confirm(`Total: $${totalAmount.toFixed(2)}\nProceed with purchase?`);
        if (confirmation) {
            alert("Order successful!");
            localStorage.removeItem('shopping-cart');
            location.reload();
        }
    }
}
window.addEventListener('DOMContentLoaded', () => {
    new App();
});
//# sourceMappingURL=app.js.map