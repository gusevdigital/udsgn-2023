import { useEffect, useState, useRef } from 'react';
import useScrollContext from '../context/SmoothScroll.context';
import { motion } from 'framer-motion';
import useForceUpdate from '../hooks/useForceUpdate';
import { items } from '../data/nav';

const Header = () => {
    const { scroll } = useScrollContext();
    const header = useRef();
    const bufferScroll = 200;
    const isHidden = useRef(false);
    const [isOpen, setIsOpen] = useState(false);

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

    scroll &&
        scroll.on('scroll', e => {
            const headerHeight = header.current.getBoundingClientRect().height;

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
                    <a
                        href="#"
                        title="<?php echo get_bloginfo('name'); ?>"
                        className="logo"
                    >
                        u-dsgn
                    </a>
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
                </div>
            </div>
        </motion.div>
    );
};

export default Header;