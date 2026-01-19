import { Cart } from './components/Cart.js';
import { ProductManager } from './components/ProductManager.js';
import { MOCK_PRODUCTS } from './utils/data.js';
import { CartItem } from './models/Product.js';

class App {
    private cart: Cart;
    private productManager: ProductManager;

    private searchInput: HTMLInputElement;
    private categoryFilter: HTMLSelectElement;
    private cartBtn: HTMLElement;
    private modal: HTMLElement;
    private closeBtn: HTMLElement;
    private checkoutBtn: HTMLButtonElement;

    constructor() {
        this.cart = new Cart();
        this.productManager = new ProductManager('product-list', this.cart);

        this.searchInput = document.getElementById('search-input') as HTMLInputElement;
        this.categoryFilter = document.getElementById('category-filter') as HTMLSelectElement;
        this.cartBtn = document.getElementById('cart-btn') as HTMLElement;
        this.modal = document.getElementById('cart-modal') as HTMLElement;
        this.closeBtn = document.querySelector('.close-modal') as HTMLElement;
        this.checkoutBtn = document.querySelector('.checkout-btn') as HTMLButtonElement;

        this.init();
    }

    private init(): void {
        this.productManager.render(MOCK_PRODUCTS);
        this.setupEventListeners();
        console.log("E-commerce application initialized.");
    }

    private setupEventListeners(): void {
        this.searchInput.addEventListener('input', () => this.handleFilter());
        this.categoryFilter.addEventListener('change', () => this.handleFilter());

        this.cartBtn.onclick = () => {
            this.modal.style.display = 'block';
            this.cart.renderCartItems();
        };

        this.closeBtn.onclick = () => {
            this.modal.style.display = 'none';
        };

        window.onclick = (event: MouseEvent) => {
            if (event.target === this.modal) {
                this.modal.style.display = 'none';
            }
        };

        this.checkoutBtn.onclick = () => {
            this.handleCheckout();
        };
    }

    private handleFilter(): void {
        const searchTerm = this.searchInput.value;
        const category = this.categoryFilter.value;
        this.productManager.filterProducts(MOCK_PRODUCTS, searchTerm, category);
    }

    private handleCheckout(): void {
        const cartItems: CartItem[] = this.cart.getItems();

        if (cartItems.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        const totalAmount = cartItems.reduce((acc: number, item: CartItem): number => {
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