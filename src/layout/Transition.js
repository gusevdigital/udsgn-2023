'use client';
import { motion, useIsPresent } from 'framer-motion';

const variants = {
    initial: { transform: 'scaleX(1)' },
    animate: { transform: 'scaleX(0)' },
    exit: { transform: 'scaleX(1)' },
};

function Transition() {
    const isPresent = useIsPresent();

    console.log('present', isPresent);

    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="transition"
            style={{
                originX: isPresent ? 0 : 1,
            }}
        ></motion.div>
    );
}

export default Transition;
