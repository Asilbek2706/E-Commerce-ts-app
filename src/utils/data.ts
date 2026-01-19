import { Product } from '../models/Product.js';

export const MOCK_PRODUCTS: Product[] = [
    {
        id: 1,
        title: "MacBook Pro 14",
        price: 1999,
        description: "Apple M2 Pro chip, 16GB RAM, 512GB SSD. High-performance laptop for pros.",
        category: "Laptops",
        image: "https://images.unsplash.com/photo-1517336712462-83e20cfd791a?auto=format&fit=crop&q=80&w=500"
    },
    {
        id: 2,
        title: "iPhone 15 Pro",
        price: 999,
        description: "Titanium design, A17 Pro chip, 48MP Main camera. The ultimate iPhone.",
        category: "Phones",
        image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=500"
    },
    {
        id: 3,
        title: "Sony WH-1000XM5",
        price: 349,
        description: "Industry-leading noise canceling with two processors and 8 microphones.",
        category: "Audio",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=500"
    },
    {
        id: 4,
        title: "Dell XPS 13",
        price: 1299,
        description: "The smallest 13-inch laptop with a refined InfinityEdge display.",
        category: "Laptops",
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=500"
    },
    {
        id: 5,
        title: "Samsung Galaxy S23",
        price: 799,
        description: "Powerful performance and stunning photography in a compact design.",
        category: "Phones",
        image: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&q=80&w=500"
    },
    {
        id: 6,
        title: "AirPods Max",
        price: 549,
        description: "Apple-designed dynamic driver provides high-fidelity audio.",
        category: "Audio",
        image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?auto=format&fit=crop&q=80&w=500"
    }
];