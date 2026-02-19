import React, { useState } from 'react';
import SEO from '../components/SEO';
import FAQ from '../components/FAQ';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you would send this to a backend
        console.log('Form submitted:', formData);
        alert('Thank you for your message. We will get back to you shortly.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-page container">
            <SEO
                title="Contact Us"
                description="Get in touch with the Sadharan team. Visit our store in Kanpur or reach out for inquiries about our minimalist clothing collection."
                keywords="contact sadharan, customer support, kanpur fashion store, email us"
            />
            <div className="contact-header">
                <h1 className="contact-title">Get in Touch</h1>
                <p className="contact-subtitle">
                    Have a question about our collections or your order? We'd love to hear from you.
                </p>
            </div>

            <div className="contact-content">
                <div className="contact-info">
                    <div className="info-item">
                        <h3>Email Us</h3>
                        <p>info@sadh7.com</p>
                    </div>
                    <div className="info-item">
                        <h3>Visit Us</h3>
                        {/* <p>Tulip Green Apartments</p> */}
                        <p>Swaraj Nagar, Kanpur, Uttar Pradesh</p>
                    </div>
                    <div className="info-item" onClick={() => window.open('https://www.instagram.com/sadharan.co.in/', '_blank')} style={{ cursor: 'pointer' }}>
                        <h3>Follow Us</h3>
                        <p>@sadharan.co.in</p>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your@email.com"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            placeholder="How can we help?"
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
                <div className="contact-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.38070785848!2d80.24226109865316!3d26.464500774588462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c370064cd0087%3A0x7d89533867b6a452!2sTulip%20Green%20Apartments!5e0!3m2!1sen!2sin!4v1771429445328!5m2!1sen!2sin" width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <FAQ />
        </div>
    );
};

export default Contact;
