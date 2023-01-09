import { createContext, useContext, useEffect, useState } from 'react';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Context = createContext({
    scroll: null,
});

export const SmoothScrollProvider = ({ children, options = {} }) => {
    const defaultOptions = {
        smooth: true,
        reloadOnContextChange: true,
        getDirection: true,
        touchMultiplier: 1,
        smoothMobile: 0,
        // smartphone: {
        //     smooth: !0,
        //     breakpoint: 767,
        // },
        // tablet: {
        //     smooth: !1,
        //     breakpoint: 1024,
        // },
    };
    const [scroll, setScroll] = useState(null);

    useEffect(() => {
        if (!scroll) {
            (async () => {
                try {
                    const LocomotiveScroll = (await import('locomotive-scroll'))
                        .default; //! Research why ".default" at the end

                    const scroll = new LocomotiveScroll({
                        el:
                            document.querySelector('[data-scroll-container]') ??
                            undefined,
                        ...defaultOptions,
                        ...options,
                    });
                    setScroll(scroll);

                    scroll.on('scroll', ScrollTrigger.update);

                    ScrollTrigger.scrollerProxy('[data-scroll-container]', {
                        scrollTop(value) {
                            return arguments.length
                                ? 0
                                : scroll.scroll.instance.scroll.y;
                        },
                        getBoundingClientRect() {
                            return {
                                top: 0,
                                left: 0,
                                width: window.innerWidth,
                                height: window.innerHeight,
                            };
                        },

                        pinType: document.querySelector('[data-scroll-section]')
                            .style.transform
                            ? 'transform'
                            : 'fixed',
                    });

                    ScrollTrigger.addEventListener('refresh', () =>
                        scroll.update()
                    );

                    ScrollTrigger.refresh();
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
