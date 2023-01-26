import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useForceUpdate from '../hooks/useForceUpdate';
import { items } from '../data/nav';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname();
    const { scroll } = useLocomotiveScroll();
    const header = useRef();
    const bufferScroll = 200;
    const isHidden = useRef(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isHome, setIsHome] = useState(false);
    const [eventSet, setEventSet] = useState(false);

    const forceUpdate = useForceUpdate();

    const scrollTo = e => {
        e.preventDefault();
        const link = e.target.getAttribute('href');
        scroll && scroll.scrollTo(link);
    };

    const mobileScrollTo = e => {
        setIsOpen(false);
        scrollTo(e);
    };

    useEffect(() => {
        setIsHome(pathname === '/');
    }, [pathname]);

    useEffect(() => {
        if (scroll && header.current) {
            if (eventSet) return;
            setEventSet(true);
            scroll.on('scroll', e => {
                if (!header.current) return;

                const headerHeight =
                    header.current.getBoundingClientRect().height;

                // Hide
                if (
                    e.direction === 'down' &&
                    !isHidden.current &&
                    e.scroll.y > headerHeight + bufferScroll
                ) {
                    isHidden.current = true;
                    forceUpdate();
                }

                // Show
                if (e.direction === 'up' && isHidden.current) {
                    isHidden.current = false;
                    forceUpdate();
                }
            });
        }
    }, [scroll]);

    return (
        <motion.div
            animate={{
                top: isHidden.current ? -100 : 0,
                transition: {
                    duration: 0.5,
                    ease: 'easeInOut',
                },
            }}
            className={`header ${isOpen ? 'mobile-open' : ''}`}
            ref={header}
        >
            <nav className="header-mobile-nav">
                <ul>
                    {items.map(({ href, title }) => (
                        <li key={href}>
                            <a
                                href={`#${href}`}
                                title={title}
                                onClick={mobileScrollTo}
                            >
                                {title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="container">
                <div className="header-inner">
                    <Link href="/" title="Home" className="logo">
                        u-dsgn
                    </Link>
                    {isHome ? (
                        <>
                            <nav className="header-nav">
                                <ul>
                                    {items.map(({ href, title }) => (
                                        <li key={href}>
                                            <a
                                                href={`#${href}`}
                                                title={title}
                                                onClick={scrollTo}
                                            >
                                                {title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <button
                                type="button"
                                className="header-burger"
                                onClick={() => setIsOpen(prev => !prev)}
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path fill="#212121" d="M0 3h24v3H0z" />
                                    <path fill="#212121" d="M0 11h24v3H0z" />
                                    <path fill="#212121" d="M0 19h24v3H0z" />
                                </svg>
                            </button>
                        </>
                    ) : (
                        <nav className="header-nav always-visible">
                            <ul>
                                <li>
                                    <Link href="/" title="Back to home">
                                        Back to home
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default Header;
