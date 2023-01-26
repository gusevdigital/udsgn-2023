'use client';
import { motion, useIsPresent, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const variants = {
    initial: { transform: 'scaleX(1)' },
    animate: { transform: 'scaleX(0)' },
    exit: { transform: 'scaleX(1)' },
};

function Transition({ children }) {
    const isPresent = useIsPresent();
    const { asPath } = useRouter();

    return (
        <AnimatePresence mode="wait">
            <div key={asPath}>
                {children}
                <motion.div
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 1 }}
                    className="transition"
                    style={{
                        originX: isPresent ? 0 : 1,
                    }}
                ></motion.div>
            </div>
        </AnimatePresence>
    );
}

export default Transition;
