const Texts = () => {
    return (
        <>
            <li>UI design</li>
            <li>Logo</li>
            <li>WIX</li>
            <li>Pos material</li>
        </>
    );
};

const InfiniteText = () => {
    return (
        <section className="home-infinite" data-scroll-section>
            <ul>
                <Texts />
                <Texts />
            </ul>
        </section>
    );
};

export default InfiniteText;
