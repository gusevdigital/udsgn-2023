import { useEffect } from 'react';

import Header from './Header';
import Footer from './Footer';
import Noise from './Noise';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const Layout = ({ children }) => {
    const { scroll } = useLocomotiveScroll();

    useEffect(() => {
        if (scroll) {
            scroll.setScroll(0, 0);
            scroll.update();
        }
    }, [scroll]);

    return (
        <>
            <Noise />
            {children}
        </>
    );
};

export default Layout;
