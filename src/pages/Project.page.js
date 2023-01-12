import ProjectContent from './project/Project.content';
import ProjectIntro from './project/Project.intro';

const Project = ({ project }) => {
    return (
        <>
            <ProjectIntro project={project} />
            <ProjectContent project={project} />
        </>
    );
};

export default Project;
