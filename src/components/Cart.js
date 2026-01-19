import { Product } from '../models/Product.js';
import { Cart } from './Cart.js';
export class ProductManager {
    constructor(containerId, cart) {
        this.containerId = containerId;
        this.cart = cart;
    }
    render(products) {
        const container = document.getElementById(this.containerId);
        if (!container) {
            console.error(`Container with ID "${this.containerId}" not found.`);
            return;
        }
        container.innerHTML = '';
        if (products.length === 0) {
            container.innerHTML = '<p class="no-products">No products found matching your criteria.</p>';
            return;
        }
        products.forEach(product => {
            const card = this.createProductCard(product);
            container.appendChild(card);
        });
    }
    filterProducts(products, searchTerm, category) {
        const filtered = products.filter(product => {
            const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = category === 'All' || product.category === category;
            return matchesSearch && matchesCategory;
        });
        this.render(filtered);
    }
    createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
                <span class="category-tag">${product.category}</span>
            </div>
            <div class="product-info">
                <h3>${product.title}</h3>
                <p class="description">${this.truncateText(product.description, 60)}</p>
                <div class="product-footer">
                    <span class="price">$${product.price.toLocaleString()}</span>
                    <button class="add-to-cart-btn" data-id="${product.id}">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
        const addButton = card.querySelector('.add-to-cart-btn');
        if (addButton) {
            addButton.addEventListener('click', () => {
                this.cart.addToCart(product);
                this.animateButton(addButton);
            });
        }
        return card;
    }
    truncateText(text, limit) {
        return text.length > limit ? text.substring(0, limit) + '...' : text;
    }
    animateButton(button) {
        button.innerText = 'Added!';
        button.style.backgroundColor = '#22c55e'; // Success color
        setTimeout(() => {
            button.innerText = 'Add to Cart';
            button.style.backgroundColor = ''; // Back to original SCSS style
        }, 1000);
    }
}
//# sourceMappingURL=Cart.js.map