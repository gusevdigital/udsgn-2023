import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { usePathname } from 'next/navigation';

const ScrollContainer = ({ children }) => {
    const containerRef = useRef(null);
    const pathname = usePathname();

    return (
        <LocomotiveScrollProvider
            options={{
                smooth: true,
                getDirection: true,
            }}
            watch={[pathname]}
            containerRef={containerRef}
        >
            <div data-scroll-container ref={containerRef}>
                {children}
            </div>
        </LocomotiveScrollProvider>
    );
};

export default ScrollContainer;
