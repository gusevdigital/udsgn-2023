import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Projects = ({ projects }) => {
    return (
        <section className="section projects" data-scroll-section>
            <div className="container">
                <h2 className="margin-bottom-2 animate" data-scroll>
                    Projects
                </h2>
                <div data-scroll className="animate">
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={40}
                        className="projects"
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
