import Intro from './home/Home.intro';
import InfiniteText from './home/Home.infinite';
import About from './home/Home.about';
import Skills from './home/Home.skills';
import Projects from './home/Home.projects';

const Home = ({ projects, data }) => {
    const infiniteText = data?.infinite?.text;
    const aboutData = data?.about;
    const skills = data?.skills?.blocks;

    return (
        <>
            <Intro />
            {infiniteText && infiniteText.length ? (
                <InfiniteText
                    texts={infiniteText.split(',').map(text => text.trim())}
                />
            ) : null}
            {aboutData ? <About aboutData={aboutData} /> : null}
            {skills ? <Skills skills={skills} /> : null}
            <Projects projects={projects} />
        </>
    );
};

export default Home;
