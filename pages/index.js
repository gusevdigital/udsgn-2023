import Head from 'next/head';
import Home from '../src/pages/Home.page';
import PageWrapper from '../src/layout/PageWrapper';

export const getStaticProps = async () => {
    const projectsResponse = await fetch(
        `${process.env.NEXT_PUBLIC_WP_API_URL}/projects`
    );
    const projects = await projectsResponse.json();

    const homeResponse = await fetch(
        `${process.env.NEXT_PUBLIC_WP_API_URL}/get-home-data`
    );

    const homeData = await homeResponse.json();

    return {
        props: {
            projects,
            homeData,
        },
        revalidate: 10,
    };
};

export default function IndexPage({ projects, homeData }) {
    return (
        <>
            <Head>
                <title>Udsgn</title>
                <meta
                    name="description"
                    content="Best digital designer evar!"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <PageWrapper>
                <Home projects={projects} data={homeData} />
            </PageWrapper>
        </>
    );
}
