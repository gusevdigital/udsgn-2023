import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';

import IconArrowLeft from '../../../public/icons/arrow-left.svg';

const Projects = ({ projects }) => {
    return (
        <section className="section projects" id="projects" data-scroll-section>
            <div className="container animate" data-scroll>
                <div className="projects-header">
                    <h2 className="projects-header__title">Projects</h2>
                    <div className="projects-header__arrows">
                        <button
                            type="button"
                            className="projects-header__arrows__prev"
                        >
                            <img src={IconArrowLeft.src} alt="Arrow left" />
                        </button>
                        <button
                            type="button"
                            className="projects-header__arrows__next"
                        >
                            <img src={IconArrowLeft.src} alt="Arrow right" />
                        </button>
                    </div>
                </div>
                <div>
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={40}
                        className="projects acc"
                        grabCursor={true}
                        modules={[Navigation]}
                        navigation={{
                            prevEl: '.projects-header__arrows__prev',
                            nextEl: '.projects-header__arrows__next',
                            disabledClass: 'disabled',
                        }}
                    >
                        {projects
                            ? projects.map((project, i) => (
                                  <SwiperSlide key={project.id}>
                                      <Link
                                          href={`/${project.slug}`}
                                          title={project.title}
                                          className={`projects-item ${
                                              i % 2 ? 'odd' : ''
                                          }`}
                                          key={project.id}
                                      >
                                          <motion.div
                                              className={`projects-img`}
                                              transition={{
                                                  duration: 5,
                                                  ease: 'linear',
                                              }}
                                          >
                                              <Image
                                                  src={project.image}
                                                  alt={project.title}
                                                  width={1920}
                                                  height={1150}
                                                  priority={true}
                                              />
                                          </motion.div>
                                      </Link>
                                  </SwiperSlide>
                              ))
                            : null}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Projects;
