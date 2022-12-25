import '../styles/main.scss';
import { useEffect } from 'react';
import Head from 'next/head';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '600', '700', '900'],
});

export default function App({ Component, pageProps }) {
    // Hide splash screen when we are server side
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const loader = document.getElementById('loader');
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
                    content="widht=device-width, initial-scale=1.0"
                />
            </Head>
            <main
                data-scroll-container
                className={`App ${montserrat.className}`}
            >
                <Component {...pageProps} />
            </main>
        </>
    );
}
