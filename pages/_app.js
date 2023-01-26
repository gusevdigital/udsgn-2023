import '../styles/main.scss';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import { Montserrat } from '@next/font/google';
import ScrollContainer from '../src/layout/ScrollContainer';
import Layout from '../src/layout/Layout';
import { ToastContainer, toast } from 'react-toastify';
import Transition from '../src/layout/Transition';

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '600', '700', '900'],
});

export default function App({ Component, pageProps }) {
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
                    <Layout>
                        <Transition>
                            <Component {...pageProps} />
                        </Transition>
                    </Layout>
                </main>
            </ScrollContainer>
            <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
        </>
    );
}
