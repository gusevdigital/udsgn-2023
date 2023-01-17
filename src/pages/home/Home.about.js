const About = ({ aboutData }) => {
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
                        {aboutData.title ? <h3>{aboutData.title}</h3> : null}
                    </div>
                    <div className="cell large-6">
                        {aboutData.text ? (
                            <p className="margin-bottom-3">{aboutData.text}</p>
                        ) : null}
                        {aboutData.button_text && aboutData.button_link ? (
                            <a
                                href={aboutData.button_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button animate"
                            >
                                {aboutData.button_text}
                            </a>
                        ) : null}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
