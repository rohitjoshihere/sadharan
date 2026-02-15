import { ShoppingBag, Star } from 'lucide-react';
import './ProductCard.css';

const ProductCard = () => {
    return (
        <section id="masterpiece" className="product-section container">
            <div className="section-header">
                <h2 className="section-title">The Masterpiece</h2>
                <p className="section-subtitle">Precision engineering meets timeless aesthetics.</p>
            </div>

            <div className="product-card">
                <div className="product-image-wrapper">
                    <img
                        src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=1760&q=80"
                        alt="Rolex Submariner"
                        className="product-img"
                    />
                    <div className="product-overlay">
                        <button className="quick-view-btn">Quick View</button>
                    </div>
                </div>

                <div className="product-details">
                    <div className="product-meta">
                        <span className="product-brand">Rolex</span>
                        <div className="product-rating">
                            <Star size={14} fill="#D4AF37" stroke="#D4AF37" />
                            <span>4.9 (128 reviews)</span>
                        </div>
                    </div>

                    <h3 className="product-name">Oyster Perpetual 41</h3>
                    <p className="product-desc">
                        The Oyster Perpetual 41 with a silver dial and an Oyster bracelet.
                        A straightforward, reliable, and elegant timepiece that captures the essence of the brand.
                    </p>

                    <div className="product-price-action">
                        <span className="price">₹ 6,50,000</span>
                        <button className="add-to-cart-btn">
                            <ShoppingBag size={18} /> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductCard;
