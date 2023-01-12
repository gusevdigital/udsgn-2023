import Image from 'next/image';

const ProjectIntro = ({ project }) => {
    return (
        <>
            <section id="intro" data-scroll-section>
                <div className="container project-intro">
                    <div className="row">
                        <div className="cell large-6">
                            <h1 className="h2 project-intro__title">
                                {project.title}
                            </h1>
                            {project.subtitle ? (
                                <p className="project-intro__subtitle">
                                    {project.subtitle}
                                </p>
                            ) : null}
                            {project.cats && project.cats.length ? (
                                <ul className="tags">
                                    {project.cats.map(cat => (
                                        <li key={cat}>{cat}</li>
                                    ))}
                                </ul>
                            ) : null}
                        </div>
                        <div className="cell large-6">
                            <div
                                className="project-intro__description"
                                dangerouslySetInnerHTML={{
                                    __html: project.description?.replace(
                                        /\n/g,
                                        '<br />'
                                    ),
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
                <Image
                    src={project.image}
                    alt={project.title}
                    width={1920}
                    height={1150}
                    className="project-intro__img"
                />
            </section>
        </>
    );
};

export default ProjectIntro;
