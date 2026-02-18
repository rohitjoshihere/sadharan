import { Truck, ShieldCheck, Leaf, Clock } from 'lucide-react';
import './Benefits.css';

const features = [
    {
        icon: <Leaf size={32} strokeWidth={1.5} />,
        title: "Eco-Conscious",
        desc: "Sustainably sourced materials that respect the planet."
    },
    {
        icon: <ShieldCheck size={32} strokeWidth={1.5} />,
        title: "Quality Guarantee",
        desc: "Craftsmanship that stands the test of time and trends."
    },
    {
        icon: <Truck size={32} strokeWidth={1.5} />,
        title: "Free Shipping",
        desc: "Complimentary shipping on all orders above ₹ 1,299."
    },
    {
        icon: <Clock size={32} strokeWidth={1.5} />,
        title: "Lifetime Support",
        desc: "We are here for you, from purchase to forever."
    }
];

const Benefits = () => {
    return (
        <section className="benefits-section">
            <div className="benefits-grid">
                {features.map((feature, index) => (
                    <div key={index} className="benefit-item">
                        <div className="benefit-icon">{feature.icon}</div>
                        <h3 className="benefit-title">{feature.title}</h3>
                        <p className="benefit-desc">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Benefits;
