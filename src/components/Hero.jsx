import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content container">
                <div className="hero-text animate-fade-in">
                    <h1 className="hero-title">
                        <span className="highlight">Sadharan is Enough.</span>
                    </h1>
                    <p className="hero-subtitle delay-1">
                        We believe that style doesn't need explanation. When something is made right, it speaks quietly — and lasts.
                    </p>
                    <div className="hero-actions delay-2">
                        <Link to="/shop" className="btn-primary">
                            View Preview <ArrowRight size={18} />
                        </Link>
                        <Link to="/about" className="btn-secondary">
                            Our Story
                        </Link>
                    </div>
                </div>
                <div className="hero-image-container animate-fade-in delay-3">
                    <img
                        src="Shirt1.jpg"
                        alt="Modern Gentleman"
                        className="hero-img"
                    />
                    <div className="hero-badge">
                        <span>New Arrival</span>
                        <strong>Autumn '24</strong>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
