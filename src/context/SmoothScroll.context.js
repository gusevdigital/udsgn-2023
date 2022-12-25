import { createContext, useContext, useEffect, useState } from 'react';

export const Context = createContext({
    scroll: null,
});

export const SmoothScrollProvider = ({ children, options = {} }) => {
    const defaultOptions = {
        smooth: true,
        getDirection: true,
        mobile: {
            smooth: true,
            breakpoint: 0,
        },
        tablet: {
            smooth: true,
            breakpoint: 0,
        },
    };
    const [scroll, setScroll] = useState(null);

    useEffect(() => {
        if (!scroll) {
            (async () => {
                try {
                    const LocomotiveScroll = (await import('locomotive-scroll'))
                        .default; //! Research why ".default" at the end
                    setScroll(
                        new LocomotiveScroll({
                            el:
                                document.querySelector(
                                    '[data-scroll-container]'
                                ) ?? undefined,
                            ...defaultOptions,
                            ...options,
                        })
                    );
                } catch (error) {
                    throw Error(`[SmoothScrollProvider]: ${error}`);
                }
            })();
        }

        return () => {
            scroll && scroll.destroy();
        };
    }, [scroll]); // eslint-disable-line react-hooks/exhaustive-deps

    return <Context.Provider value={{ scroll }}>{children}</Context.Provider>;
};

export default function useScrollContext() {
    return useContext(Context);
}

SmoothScrollProvider.displayName = 'SmoothScrollProvider';
