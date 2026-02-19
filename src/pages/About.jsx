import SEO from '../components/SEO';
import Story from '../components/Story';
import Values from '../components/Values';

const About = () => {
    return (
        <main style={{ paddingTop: '5rem' }}>
            <SEO
                title="Our Story"
                description="Sadharan is redefining fashion with conscious simplicity. Learn about our commitment to craftsmanship and timeless design."
                keywords="about sadharan, fashion philosophy, slow fashion, sustainable clothing brand"
            />
            <Story />
            <Values />
        </main>
    );
};

export default About;
