import Head from 'next/head';
import PageWrapper from '../../layout/PageWrapper';

const NotFound = () => {
    return (
        <>
            <Head>
                <title>Project 404</title>
                <meta name="description" content="U-dsgn" />
            </Head>
            <PageWrapper>
                <section data-scroll-section>
                    <div className="container project-intro">
                        <div className="row">
                            <div className="cell">
                                <h2>404... Wow! How? Why?! O_o</h2>
                            </div>
                        </div>
                    </div>
                </section>
            </PageWrapper>
        </>
    );
};

export default NotFound;
