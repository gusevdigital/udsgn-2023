import Image from 'next/image';
import IconQuote from '../../../public/icons/icon-quote.png';

const SectionText = ({ title, subtitle, text }) => {
    return (
        <section className="section" data-scroll-section>
            <div className="container project-section-text animate" data-scroll>
                <div className="row">
                    <div className="cell large-6">
                        {subtitle ? (
                            <p className="project-section-text__subtitle acc">
                                {subtitle}
                            </p>
                        ) : null}
                        {title ? (
                            <h3 className="project-section-text__title acc">
                                {title}
                            </h3>
                        ) : null}
                    </div>
                    <div className="cell large-6">
                        <div
                            className="project-section-text__text acc"
                            dangerouslySetInnerHTML={{
                                __html: text?.replace(/\n/g, '<br />'),
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SectionImage = ({ img }) => {
    return (
        <section data-scroll-section>
            <Image
                src={img}
                alt={''}
                width={1920}
                height={1150}
                className="project-section-img acc"
            />
        </section>
    );
};

const SectionQuote = ({ quote, source }) => {
    if (!quote) return null;

    return (
        <section className="section" data-scroll-section>
            <div
                className="container project-section-quote animate"
                data-scroll
            >
                <div className="row">
                    <div className="cell large-6">
                        <Image
                            src={IconQuote}
                            alt="Quote Sign"
                            className="project-section-quote__sign acc"
                        />
                    </div>
                    <div className="cell large-6">
                        <div
                            className="project-section-quote__quote acc"
                            dangerouslySetInnerHTML={{
                                __html: quote
                                    ?.replace(/^\n/, '')
                                    .replace(/\n$/, '')
                                    .replace(/\n/g, '<br />'),
                            }}
                        ></div>
                        {source ? (
                            <p className="project-section-quote__source acc">
                                — {source}
                            </p>
                        ) : null}
                    </div>
                </div>
            </div>
        </section>
    );
};

const ProjectContent = ({ project }) => {
    const contentMap = [];

    if (!project.sections || !project.sections.length) return null;

    project.sections.forEach((project, i) => {
        if (project.acf_fc_layout === 'text')
            contentMap.push(
                <SectionText
                    title={project.title}
                    subtitle={project.subtitle}
                    text={project.text}
                    key={i}
                />
            );

        if (project.acf_fc_layout === 'image')
            contentMap.push(<SectionImage img={project.image} key={i} />);

        if (project.acf_fc_layout === 'quote')
            contentMap.push(
                <SectionQuote
                    quote={project.quote}
                    source={project.source}
                    key={i}
                />
            );
    });

    return <>{contentMap}</>;
};

export default ProjectContent;
