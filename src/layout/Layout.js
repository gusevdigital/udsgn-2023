import { useEffect } from 'react';

import Header from './Header';
import Footer from './Footer';
import Noise from './Noise';
import Loader from './Loader';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const Layout = ({ children, loading }) => {
    const { scroll } = useLocomotiveScroll();

    useEffect(() => {
        if (scroll) {
            scroll.setScroll(0, 0);
            scroll.update();
        }
    }, [scroll]);

    return (
        <>
            <Header loading={loading} />
            <Noise />
            {children}
            <Footer />
            <Loader loading={loading} />
        </>
    );
};

export default Layout;
