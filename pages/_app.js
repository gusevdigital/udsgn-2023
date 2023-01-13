import '../styles/main.scss';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Montserrat } from '@next/font/google';
import Router from 'next/router';
import ScrollContainer from '../src/layout/ScrollContainer';
import Layout from '../src/layout/Layout';
import { ToastContainer, toast } from 'react-toastify';

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '600', '700', '900'],
});

export default function App({ Component, pageProps }) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Used for page transition
        const start = () => {
            setLoading(true);
        };
        const end = () => {
            setLoading(false);
        };
        Router.events.on('routeChangeStart', start);
        Router.events.on('routeChangeComplete', end);
        Router.events.on('routeChangeError', end);
        return () => {
            Router.events.off('routeChangeStart', start);
            Router.events.off('routeChangeComplete', end);
            Router.events.off('routeChangeError', end);
        };
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const loader = document.getElementById('initLoader');
            if (loader) loader.classList.add('hidden');
        }
    }, []);

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="keywords" content="studying, nextjs" />
                <meta name="author" content="Gusev Digital" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <ScrollContainer>
                <main className={`App ${montserrat.className}`}>
                    <Layout loading={loading}>
                        <Component {...pageProps} />
                    </Layout>
                </main>
            </ScrollContainer>
            <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
        </>
    );
}
