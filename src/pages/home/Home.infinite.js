const Texts = ({ texts }) => {
    return (
        <>
            {texts.map(text => (
                <li key={text}>{text}</li>
            ))}
        </>
    );
};

const InfiniteText = ({ texts }) => {
    return (
        <section className="home-infinite" data-scroll-section>
            <ul>
                <Texts texts={texts} />
                <Texts texts={texts} />
            </ul>
        </section>
    );
};

export default InfiniteText;
