import Link from 'next/link';

const NotFound = () => {
    return (
        <section className="section">
            <div
                className="container"
                style={{
                    textAlign: 'center',
                }}
            >
                <h1>404</h1>
                <h2
                    style={{
                        marginBottom: '4rem',
                    }}
                >
                    Page not found
                </h2>
                <Link href="/" className="button">
                    Go to home page
                </Link>
            </div>
        </section>
    );
};

export default NotFound;
