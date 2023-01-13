import Image from 'next/image';
import Head from 'next/head';
import PageWrapper from '../../src/layout/PageWrapper';
import ProjectPage from '../../src/pages/Project.page';

export const getStaticPaths = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}/projects`);
    const data = await res.json();

    const paths = data.map(project => ({
        params: {
            projectSlug: project.slug.toString(),
        },
    }));

    return {
        paths,
        fallback: false, // fallback page. if set to false, then will return 404 page for the fallback
    };
};

export const getStaticProps = async context => {
    const slug = context.params.projectSlug;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_WP_API_URL}/project/${slug}`
    );

    const data = await res.json();

    return {
        props: {
            project: data,
        },
        revalidate: 10,
    };
};

const Project = ({ project }) => {
    return (
        <>
            <Head>
                <title>{project.title}</title>
                <meta
                    name="description"
                    content="Best digital designer evar!"
                />
            </Head>
            <PageWrapper>
                <ProjectPage project={project} />
                {/* <section data-scroll-section>
                    <div className="project-intro">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={1920}
                            height={1150}
                            className="project-intro__img"
                        />
                        <h1>{project.title}</h1>
                    </div>
                </section> */}
            </PageWrapper>
        </>
    );
};

export default Project;
