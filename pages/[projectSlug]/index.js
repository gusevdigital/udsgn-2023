import Head from 'next/head';
import PageWrapper from '../../src/layout/PageWrapper';
import ProjectPage from '../../src/pages/Project.page';
import NotFound from '../../src/pages/project/Project.notFound';
import Loading from '../../src/pages/project/Project.loading';
import { useRouter } from 'next/router';

export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking',
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
    const router = useRouter();

    if (router.isFallback) return <Loading />;

    if (project?.data?.status && project.data.status === 404)
        return <NotFound />;

    return (
        <>
            <Head>
                <title>{project.title}</title>
                <meta name="description" content="U-dsgn" />
            </Head>
            <PageWrapper>
                <ProjectPage project={project} />
            </PageWrapper>
        </>
    );
};

export default Project;
