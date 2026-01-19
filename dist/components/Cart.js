export class Cart {
    constructor() {
        this.items = new Map();
        this.loadFromStorage();
    }
    addToCart(product) {
        const existing = this.items.get(product.id);
        if (existing) {
            this.items.set(product.id, Object.assign(Object.assign({}, existing), { quantity: existing.quantity + 1 }));
        }
        else {
            this.items.set(product.id, Object.assign(Object.assign({}, product), { quantity: 1 }));
        }
        this.saveToStorage();
        this.updateUI();
    }
    removeFromCart(productId) {
        if (this.items.has(productId)) {
            this.items.delete(productId);
            this.saveToStorage();
            this.updateUI();
            this.renderCartItems();
        }
    }
    getItems() {
        return Array.from(this.items.values());
    }
    renderCartItems() {
        const container = document.getElementById('cart-items-container');
        const totalElement = document.getElementById('cart-total-price');
        if (!container || !totalElement)
            return;
        container.innerHTML = '';
        let total = 0;
        if (this.items.size === 0) {
            container.innerHTML = '<p style="text-align: center; color: #64748b; padding: 20px;">Your cart is empty.</p>';
            totalElement.innerText = '0';
            return;
        }
        this.items.forEach((item) => {
            total += item.price * item.quantity;
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item-row';
            itemElement.style.cssText = 'display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding: 10px; background: #f8fafc; border-radius: 8px;';
            itemElement.innerHTML = `
                <div style="flex: 1;">
                    <h4 style="margin: 0; font-size: 0.9rem;">${item.title}</h4>
                    <small style="color: #64748b;">${item.quantity} x $${item.price}</small>
                </div>
                <div style="display: flex; align-items: center; gap: 15px;">
                    <strong style="color: #0f172a;">$${(item.price * item.quantity).toFixed(2)}</strong>
                    <button class="remove-item-btn" data-id="${item.id}" style="background: none; border: none; color: #ef4444; cursor: pointer; font-size: 1.2rem;">
                        🗑️
                    </button>
                </div>
            `;
            container.appendChild(itemElement);
        });
        totalElement.innerText = total.toFixed(2);
        this.setupRemoveListeners();
    }
    setupRemoveListeners() {
        const removeButtons = document.querySelectorAll('.remove-item-btn');
        removeButtons.forEach(btn => {
            btn.onclick = (e) => {
                const target = e.currentTarget;
                const id = parseInt(target.dataset.id);
                this.removeFromCart(id);
            };
        });
    }
    saveToStorage() {
        const data = Array.from(this.items.entries());
        localStorage.setItem('shopping-cart', JSON.stringify(data));
    }
    loadFromStorage() {
        const saved = localStorage.getItem('shopping-cart');
        if (saved) {
            try {
                this.items = new Map(JSON.parse(saved));
                this.updateUI();
            }
            catch (e) {
                console.error(e);
            }
        }
    }
    updateUI() {
        const countBadge = document.getElementById('cart-count');
        if (countBadge) {
            let totalCount = 0;
            this.items.forEach(item => totalCount += item.quantity);
            countBadge.innerText = totalCount.toString();
        }
    }
}
//# sourceMappingURL=Cart.js.map