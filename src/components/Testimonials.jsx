import { Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
    {
        name: "Arjun M.",
        role: "Architect",
        text: "Sadharan's shirts are exactly what I’ve been looking for. Minimal, quality fabric, and perfectly fitting. A rare find.",
    },
    {
        name: "Siddharth K.",
        role: "Founder",
        text: "The linen collection is outstanding. I wear them to meetings and casual outings alike. The versatility is unmatched.",
    },
    {
        name: "Rohan V.",
        role: "Creative Director",
        text: "Finally, a brand that understands 'less is more'. The attention to detail in the stitching is impressive.",
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials-section container">
            <div className="section-header">
                <h2 className="section-title">Client Stories</h2>
                <p className="section-subtitle">Real feedback from real people.</p>
            </div>

            <div className="testimonials-grid">
                {testimonials.map((t, i) => (
                    <div key={i} className="testimonial-card animate-on-scroll">
                        <Quote size={32} strokeWidth={1.5} className="quote-icon-custom" />
                        <p className="testimonial-text">"{t.text}"</p>
                        <div className="testimonial-author">
                            <span className="author-name">{t.name}</span>
                            <span className="author-role">{t.role}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
