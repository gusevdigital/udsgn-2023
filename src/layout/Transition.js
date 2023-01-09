'use client';
import { motion, useIsPresent } from 'framer-motion';

const animationConfig = {
    initial: { transform: 'scaleX(1)' },
    animate: { transform: 'scaleX(0)' },
    exit: { transform: 'scaleX(1)' },
};

function Transition() {
    const isPresent = useIsPresent();

    return (
        <motion.div
            variants={animationConfig}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1 }}
            className="transition"
            style={{
                originX: isPresent ? 0 : 1,
            }}
        ></motion.div>
    );
}

export default Transition;
