import Head from 'next/head';
import PageWrapper from '../../layout/PageWrapper';

const Loading = () => {
    return (
        <>
            <Head>
                <title>Loading</title>
                <meta name="description" content="U-dsgn" />
            </Head>
            <PageWrapper>
                <section data-scroll-section>
                    <div className="container project-intro">
                        <div className="row">
                            <div className="cell">
                                <h2>Loading...</h2>
                            </div>
                        </div>
                    </div>
                </section>
            </PageWrapper>
        </>
    );
};

export default Loading;
