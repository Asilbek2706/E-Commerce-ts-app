import { Product } from '../models/Product.js';
import { Cart } from './Cart.js';

export class ProductManager {
    constructor(
        private containerId: string,
        private cart: Cart
    ) {}

    public render(products: Product[]): void {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        container.innerHTML = '';

        if (products.length === 0) {
            container.innerHTML = '<p class="no-products">No products found matching your criteria.</p>';
            return;
        }

        products.forEach(product => {
            const card = this.createCard(product);
            container.appendChild(card);
        });
    }

    public filterProducts(products: Product[], searchTerm: string, category: string): void {
        const filtered = products.filter(product => {
            const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = category === 'All' || product.category === category;
            return matchesSearch && matchesCategory;
        });
        this.render(filtered);
    }

    private createCard(product: Product): HTMLElement {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}" loading="lazy">
            <div class="product-info">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <div class="price">$${product.price}</div>
                <button class="add-btn">Add to Cart</button>
            </div>
        `;

        const btn = card.querySelector('.add-btn') as HTMLButtonElement;

        btn.onclick = () => {
            this.cart.addToCart(product);
            this.showSuccessFeedback(btn);
        };

        return card;
    }

    private showSuccessFeedback(btn: HTMLButtonElement): void {
        const originalText = btn.innerText;
        btn.innerText = 'Added! ✓';
        btn.style.backgroundColor = '#22c55e';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.backgroundColor = '';
            btn.disabled = false;
        }, 800);
    }
}