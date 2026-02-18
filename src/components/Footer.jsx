import { Link } from 'react-router-dom';
import { downloadEmails } from '../utils/emailSaver.js';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <Link to="/" className="footer-logo-link">
                        <img src="/logo.png" alt="SADHARAN" className="footer-logo-img" />
                    </Link>
                    <p>
                        &copy; {new Date().getFullYear()} Sadharan Inc.
                        <button
                            onClick={downloadEmails}
                            style={{ opacity: 0, cursor: 'default', width: '10px', height: '10px' }}
                            aria-label="Admin Download"
                        >.</button>
                    </p>
                </div>
                <div className="footer-links">
                    <div>
                        <h4>Shop</h4>
                        <ul>
                            <li><a href="#">New Arrivals</a></li>
                            <li><a href="#">Best Sellers</a></li>
                            <li><a href="#">Accessories</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Legal</h4>
                        <ul>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/terms-of-service">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
