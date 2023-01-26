import WebImg from '../../../public/home/home-skills-web.png';
import IdentityImg from '../../../public/home/home-skills-identity.png';
import PrintImg from '../../../public/home/home-skills-print.png';
import IllustrationImg from '../../../public/home/home-skills-illustration.png';
import FeaturedBox from '../../components/FeaturedBox';

const Skills = ({ skills }) => {
    const imgs = {
        tree: WebImg,
        eye: IdentityImg,
        stones: PrintImg,
        dye: IllustrationImg,
    };

    return (
        <section className="section" data-scroll-section>
            <div className="container overflow-hidden">
                <div className="row">
                    {skills.map((skill, i) => (
                        <div
                            key={i}
                            className="cell large-6 animate"
                            data-scroll
                        >
                            <FeaturedBox
                                number={`${i + 1}`}
                                label={skill.subtitle}
                                title={skill.title}
                                tags={
                                    skill.tags
                                        ? skill.tags
                                              .split(',')
                                              .map(s => s.trim())
                                        : []
                                }
                                img={imgs[skill.image]}
                                theme={skill.theme}
                                color={skill.color}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
