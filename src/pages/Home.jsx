import Hero from '../components/Hero';
import LaunchPreview from '../components/LaunchPreview';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const Home = () => {
    return (
        <main>
            <Hero />
            <Benefits />{/* Consider moving Benefits to after LaunchPreview if needed, but keeping original order minus Products is safer */}
            <LaunchPreview />
            <Testimonials />
            <Newsletter />
        </main>
    );
};

export default Home;
