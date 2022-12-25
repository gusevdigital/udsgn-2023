import Header from './Header';
import Footer from './Footer';
import NoiseImg from '../../public/noise.png';

const Layout = ({ children, className = '' }) => {
    return (
        <>
            {/* <div
                className="noise"
                style={{
                    backgroundImage: `url("${NoiseImg.src}")`,
                }}
            ></div> */}

            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
