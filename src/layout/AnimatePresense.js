'use client';
import { useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

function AnimatePresenceComponent({ children }) {
    const { asPath } = useRouter();
    const { scroll } = useLocomotiveScroll();

    // useEffect(() => {
    //     if (scroll) {
    //         scroll.setScroll(0, 0);
    //         scroll.update();
    //     }
    // }, [scroll]);

    const handleExitComplete = useCallback(() => {
        if (typeof window !== 'undefined') {
            if (scroll) {
                scroll.setScroll(0, 0);
                scroll.update();
            }
        }
    }, [scroll]);

    return (
        <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
            <div key={asPath}>{children}</div>
        </AnimatePresence>
    );
}

export default AnimatePresenceComponent;
