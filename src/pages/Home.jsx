import SEO from '../components/SEO';
import Hero from '../components/Hero';
import LaunchPreview from '../components/LaunchPreview';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Newsletter from '../components/Newsletter';

const Home = () => {
    return (
        <main>
            <SEO
                title="Timeless Minimalist Clothing"
                description="Sadharan offers premium, minimalist clothing that embodies simplicity and elegance. Discover our timeless collection of linen shirts and more."
                keywords="minimalist clothing, linen shirts, sustainable fashion, premium menswear, timeless style"
            />
            <Hero />
            <Benefits />{/* Consider moving Benefits to after LaunchPreview if needed, but keeping original order minus Products is safer */}
            <LaunchPreview />
            <Testimonials />
            <FAQ />
            <Newsletter />
        </main>
    );
};

export default Home;
