import Head from 'next/head';
import Home from '../src/pages/Home.page';
import Layout from '../src/layout/Layout';
import PageWrapper from '../src/layout/PageWrapper';

export const getStaticProps = async () => {
    const res = await fetch(`${process.env.WP_API_URL}/projects`);

    const data = await res.json();

    return {
        props: {
            projects: data,
        },
        revalidate: 10,
    };
};

export default function IndexPage({ projects }) {
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
                <Home projects={projects} />
            </PageWrapper>
        </>
    );
}
