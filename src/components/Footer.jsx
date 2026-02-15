import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <h2 className="footer-logo">SADHARAN</h2>
                    <p>&copy; {new Date().getFullYear()} Sadharan Inc.</p>
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
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
