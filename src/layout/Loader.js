const Loader = ({ loading }) => {
    return <div id={'loader'} className={`${loading ? 'active' : ''}`}></div>;
};

export default Loader;
