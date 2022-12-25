import Header from './Header';
import Footer from './Footer';
import Noise from './Noise';

const Layout = ({ children }) => {
    return (
        <>
            <Noise />
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
