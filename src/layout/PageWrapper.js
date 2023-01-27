import { useEffect } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import Header from './Header';
import Footer from './Footer';
import Transition from './Transition';

const PageWrapper = ({ children }) => {
    const { scroll } = useLocomotiveScroll();
    useEffect(() => {
        if (scroll) {
            scroll.setScroll(0, 0);
            scroll.update();
        }
    }, [scroll]);

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
