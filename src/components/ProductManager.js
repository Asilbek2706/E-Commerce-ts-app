import { Product } from '../models/Product.js';
import { Cart } from './Cart.js';
export class ProductManager {
    constructor(containerId, cart) {
        this.containerId = containerId;
        this.cart = cart;
    }
    render(products) {
        const container = document.getElementById(this.containerId);
        if (!container)
            return;
        container.innerHTML = ''; // Clear container
        products.forEach(product => {
            const productCard = this.createCard(product);
            container.appendChild(productCard);
        });
    }
    createCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <div class="price">$${product.price}</div>
            <button class="add-btn" data-id="${product.id}">Add to Cart</button>
        `;
        const btn = card.querySelector('.add-btn');
        btn.onclick = () => this.cart.addToCart(product);
        return card;
    }
    filterProducts(products, searchTerm, category) {
        const filtered = products.filter(product => {
            const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = category === 'All' || product.category === category;
            return matchesSearch && matchesCategory;
        });
        this.render(filtered);
    }
}
//# sourceMappingURL=ProductManager.js.map