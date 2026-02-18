import './Story.css';

const Story = () => {
    return (
        <section id="story" className="story-section container">
            <div className="story-grid">
                <div className="story-image-wrapper animate-on-scroll">
                    <img
                        src="/about.JPG"
                        alt="Sadharan Aesthetic"
                        className="story-img"
                    />
                </div>
                <div className="story-content animate-on-scroll">
                    <h2 className="story-title">Sadh7: The Essence.</h2>
                    <p className="story-text">
                        <b>Sadh7</b> began with a simple belief shared between a brother and sister — <i>Sadharan is Enough.</i>
                    </p>
                    <p className="story-text">
                        Born from the idea of <i>sadh</i> — the ordinary, the essential — Sadh7 celebrates menswear that feels effortless yet intentional.
                        It’s about clothing that fits into real life, without needing excess or noise.
                    </p>
                    <p className="story-text">
                        Sadh7 is our story of balance — between classic and current, strength and subtlety, brother and sister.
                    </p>
                    <button className="read-more-btn">Read Our Journal</button>
                </div>
            </div>
        </section>
    );
};

export default Story;
