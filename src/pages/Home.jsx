import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const Home = () => {
    return (
        <main>
            <Hero />
            <Benefits />
            <FeaturedProducts />
            <Testimonials />
            <Newsletter />
        </main>
    );
};

export default Home;
