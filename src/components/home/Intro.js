import Image from 'next/image';
import Noise from '../../layout/Noise';
import IntroImg from '../../../public/home/home-intro.jpg';
import StoneUp from '../../../public/home/home-intro-stone-up.png';
import StoneLeft from '../../../public/home/home-intro-stone-left.png';
import StoneRight from '../../../public/home/home-intro-stone-right.png';
import { motion } from 'framer-motion';

const Intro = () => {
    return (
        <section className="home-intro" id="home" data-scroll-section>
            <Noise data-scroll data-scroll-sticky data-scroll-target="body" />
            <div className="container">
                <h1 className="text-right">
                    Digital <i>Designer</i> <br /> & Artist
                </h1>
            </div>
            <div className="home-intro__art">
                <Image
                    src={IntroImg}
                    alt="Home intro image"
                    priority={true}
                    className="home-intro__art__main"
                    data-scroll
                    data-scroll-speed="-1"
                />
                <motion.div
                    className="home-intro__art__stone home-intro__art__stone--left"
                    initial={{ y: '-6px' }}
                    animate={{ y: '6px' }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                >
                    <Image
                        src={StoneLeft}
                        alt="Home intro stone left"
                        width={105}
                        height={230}
                        data-scroll
                        data-scroll-speed="2"
                    />
                </motion.div>

                <motion.div
                    className="home-intro__art__stone home-intro__art__stone--right"
                    initial={{ y: '-6px' }}
                    animate={{ y: '6px' }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                >
                    <Image
                        src={StoneRight}
                        alt="Home intro stone right"
                        width={105}
                        height={230}
                        data-scroll
                        data-scroll-speed="0.5"
                    />
                </motion.div>

                <motion.div
                    className="home-intro__art__stone home-intro__art__stone--up"
                    initial={{ y: '-6px' }}
                    animate={{ y: '6px' }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        repeatDelay: 0.5,
                    }}
                >
                    <Image
                        src={StoneUp}
                        alt="Home intro stone up"
                        width={105}
                        height={230}
                        data-scroll-speed="1"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Intro;
