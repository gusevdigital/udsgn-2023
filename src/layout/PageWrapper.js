import Header from './Header';
import Footer from './Footer';
import Transition from './Transition';

const PageWrapper = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <Transition />
        </>
    );
};

export default PageWrapper;
