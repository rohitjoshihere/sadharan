import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollObserver = () => {
    const location = useLocation();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        // Small timeout to ensure DOM is ready after route transition
        setTimeout(() => {
            const hiddenElements = document.querySelectorAll('.animate-on-scroll');
            hiddenElements.forEach((el) => observer.observe(el));
        }, 100);

        return () => observer.disconnect();
    }, [location]); // Re-run when location (route) changes

    return null;
};

export default ScrollObserver;
