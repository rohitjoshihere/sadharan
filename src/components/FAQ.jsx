import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const faqs = [
    {
        question: "Do you offer international shipping?",
        answer: "Yes, Sadharan ships worldwide. International shipping rates are calculated at checkout based on your location."
    },
    {
        question: "How should I care for my linen shirts?",
        answer: "We recommend washing in cold water on a gentle cycle. For best results, hang dry to preserve the fabric's integrity."
    },
    {
        question: "What is your return policy?",
        answer: "We accept returns within 14 days of delivery. Items must be unworn, unwashed, and in their original packaging."
    },
    {
        question: "Are your materials sustainably sourced?",
        answer: "Absolutely. We prioritize natural fibers like organic cotton and linen, working with suppliers who adhere to ethical standards."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section container">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
                        <button className="faq-question" onClick={() => toggleFAQ(index)}>
                            {faq.question}
                            {openIndex === index ? <ChevronUp className="faq-icon" /> : <ChevronDown className="faq-icon" />}
                        </button>
                        <div className={`faq-answer ${openIndex === index ? 'visible' : ''}`}>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
