import WebImg from '../../../public/home/home-skills-web.png';
import IdentityImg from '../../../public/home/home-skills-identity.png';
import PrintImg from '../../../public/home/home-skills-print.png';
import IllustrationImg from '../../../public/home/home-skills-illustration.png';
import FeaturedBox from '../../components/FeaturedBox';

const Skills = () => {
    return (
        <section className="section" data-scroll-section>
            <div className="container">
                <div className="row">
                    <div className="cell large-6 animate" data-scroll>
                        <FeaturedBox
                            number="1"
                            label="From 1 to 3 weeks"
                            title="Web Design & Social Media"
                            tags={[
                                'ui design',
                                'webflow',
                                'design system',
                                'wix',
                                'ads',
                                'branding post',
                                'mailchimp edm',
                            ]}
                            img={WebImg}
                            theme="dark"
                            color="blue"
                        />
                    </div>
                    <div className="cell large-6 animate" data-scroll>
                        <FeaturedBox
                            number="2"
                            label="From 2 to 3 weeks"
                            title="Created Identity"
                            tags={[
                                'guideline',
                                'logo',
                                'rebranding',
                                'brandbook',
                                'pos material',
                                'visualization',
                            ]}
                            img={IdentityImg}
                            theme="dark"
                            color="pink"
                        />
                    </div>
                    <div className="cell large-6 animate" data-scroll>
                        <FeaturedBox
                            number="3"
                            label="From 3 to 5 days"
                            title="Print Design"
                            tags={[
                                'catalogs',
                                'promo product',
                                'marketing design',
                                'custom print',
                                'business print design',
                                'cards & invitation',
                            ]}
                            img={PrintImg}
                            theme="light"
                            color="pink"
                        />
                    </div>
                    <div className="cell large-6 animate" data-scroll>
                        <FeaturedBox
                            number="4"
                            label="From 1 to 2 weeks"
                            title="Digital Illustration"
                            tags={[
                                'character',
                                'art logo',
                                '#NFT',
                                'cartoon portrait',
                                'icons',
                                'branding illustration',
                                'social media stickers',
                            ]}
                            img={IllustrationImg}
                            theme="light"
                            color="blue"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
