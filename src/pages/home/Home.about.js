const Home = () => {
    return (
        <section id="about" className="section" data-scroll-section>
            <div
                className="container"
                data-scroll
                data-scroll-delay="0.4"
                data-scroll-speed="2"
            >
                <div className="row">
                    <div className="cell large-6">
                        <h3>
                            I'm Julia — a digital designer & illustrator with
                            2012 - present years experience.
                        </h3>
                    </div>
                    <div className="cell large-6">
                        <p className="margin-bottom-3">
                            My clients are different business areas from
                            startups and bloggers to large enterprises and
                            innovative companies. I create attractive and
                            creative solutions for my clients for their
                            business.
                        </p>
                        <a
                            href="https://google.com"
                            target="_blank"
                            className="button animate"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
