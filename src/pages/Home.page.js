import Intro from './home/Home.intro';
import InfiniteText from './home/Home.infinite';
import About from './home/Home.about';
import Skills from './home/Home.skills';
import Projects from './home/Home.projects';

const Home = ({ projects }) => {
    return (
        <>
            <Intro />
            <InfiniteText />
            <About />
            <Skills />
            <Projects projects={projects} />
        </>
    );
};

export default Home;
