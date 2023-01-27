'use client';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

function AnimatePresenceComponent({ children }) {
    const { asPath } = useRouter();

    return (
        <AnimatePresence mode="wait">
            <div key={asPath}>{children}</div>
        </AnimatePresence>
    );
}

export default AnimatePresenceComponent;
