import Head from 'next/head';
import Home from '../src/pages/Home.page';
import Layout from '../src/layout/Layout';
import { SmoothScrollProvider } from '../src/context/SmoothScroll.context';

export default function IndexPage() {
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
            <SmoothScrollProvider>
                <Layout>
                    <Home />
                </Layout>
            </SmoothScrollProvider>
        </>
    );
}
