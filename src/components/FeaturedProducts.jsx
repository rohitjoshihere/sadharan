import { ShoppingBag } from 'lucide-react';
import './FeaturedProducts.css';

const products = [
    {
        id: 1,
        name: "The Classic White Oxford",
        price: "₹ 2,499",
        image: "Shirt1.jpg",
        category: "Signature Series"
    },
    {
        id: 2,
        name: "Midnight Linen Breeze",
        price: "₹ 2,899",
        image: "Shirt2.jpg",
        category: "Summer Collection"
    },
    {
        id: 3,
        name: "Earth Tone Overshirt",
        price: "₹ 3,250",
        image: "Shirt3.jpg",
        category: "Essentials"
    },
    {
        id: 4,
        name: "Charcoal Structured Fit",
        price: "₹ 2,999",
        image: "Shirt4.jpg",
        category: "Formal Edit"
    }
];

const FeaturedProducts = () => {
    return (
        <section id="shop" className="featured-section container">
            <div className="section-header center-text">
                <h2 className="section-title">Essentials for Him</h2>
                <p className="section-subtitle">Curated pieces that define the modern wardrobe.</p>
            </div>

            <div className="products-grid">
                {products.map((product, index) => (
                    <div key={product.id} className="product-item animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
                        <div className="product-thumb">
                            <img src={product.image} alt={product.name} />
                            <button className="add-btn" aria-label="Add to cart">
                                <ShoppingBag size={18} />
                            </button>
                        </div>
                        <div className="product-info">
                            <span className="product-category">{product.category}</span>
                            <h3 className="product-title">{product.name}</h3>
                            <span className="product-price">{product.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedProducts;
