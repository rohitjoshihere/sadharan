import { Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
    {
        name: "Arjun M.",
        role: "Architect",
        text: "Sadharan's shirts are exactly what I’ve been looking for. Minimal, quality fabric, and perfectly fitting.",
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
    },
    {
        name: "Ananya S.",
        role: "Graphic Designer",
        text: "The fabric breathes so well. It feels like wearing nothing at all, yet looks so structured and elegant.",
    },
    {
        name: "Vikram R.",
        role: "Writer",
        text: "I love the subtle earth tones. It’s hard to find menswear that isn’t just blue or black. Sadharan nails it.",
    },
    {
        name: "Meera P.",
        role: "Art Curator",
        text: "The aesthetic is pure and honest. I appreciate the transparency in your production as much as the clothes themselves.",
    },
    {
        name: "Kabir J.",
        role: "Musician",
        text: "Perfect for long studio sessions. Comfortable enough to sleep in, sharp enough to perform in.",
    },
    {
        name: "Neha T.",
        role: "Entrepreneur",
        text: "My mornings are easier now. I just grab a Sadharan shirt and I know I look put-together instantly.",
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="section-header container text-center">
                <h2 className="section-title">Client Stories</h2>
                <p className="section-subtitle">Real feedback from real people who value simplicity.</p>
            </div>

            <div className="testimonials-overflow">
                <div className="testimonials-track">
                    {/* First set of testimonials */}
                    {testimonials.map((t, i) => (
                        <div key={`original-${i}`} className="testimonial-card">
                            <Quote size={28} strokeWidth={1.5} className="quote-icon-custom" />
                            <p className="testimonial-text">"{t.text}"</p>
                            <div className="testimonial-author">
                                <span className="author-name">{t.name}</span>
                                <span className="author-role">{t.role}</span>
                            </div>
                        </div>
                    ))}
                    {/* Duplicate set for seamless scrolling */}
                    {testimonials.map((t, i) => (
                        <div key={`duplicate-${i}`} className="testimonial-card">
                            <Quote size={28} strokeWidth={1.5} className="quote-icon-custom" />
                            <p className="testimonial-text">"{t.text}"</p>
                            <div className="testimonial-author">
                                <span className="author-name">{t.name}</span>
                                <span className="author-role">{t.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
