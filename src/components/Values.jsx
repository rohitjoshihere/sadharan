import { PenTool, Feather, Heart } from 'lucide-react';
import './Values.css';

const values = [
    {
        icon: <Feather size={40} strokeWidth={1} />,
        title: "Conscious Simplicity",
        text: "We don't just design less; we design better. Every stitch has a purpose, every cut is intentional. We strip away the unnecessary to reveal the essential."
    },
    {
        icon: <PenTool size={40} strokeWidth={1} />,
        title: "Craftsmanship First",
        text: "In a world of fast fashion, we choose the slow path. Our garments are constructed to last, aging beautifully with you over time."
    },
    {
        icon: <Heart size={40} strokeWidth={1} />,
        title: "Honest Materials",
        text: "We believe in fabrics that breathe and feel natural against the skin. No synthetics where nature does it better. Just pure, honest comfort."
    }
];

const Values = () => {
    return (
        <section className="values-section container">
            <div className="values-header">
                <h2 className="values-title">Our Philosophy</h2>
                <div className="values-divider"></div>
            </div>
            <div className="values-grid">
                {values.map((v, i) => (
                    <div key={i} className="value-card animate-on-scroll">
                        <div className="value-icon">{v.icon}</div>
                        <h3 className="value-name">{v.title}</h3>
                        <p className="value-desc">{v.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Values;
