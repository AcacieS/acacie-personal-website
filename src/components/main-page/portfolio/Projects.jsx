import './Projects.css';
import Project from './Project'

export function Projects({projects}){
    return (
        <div className="projects-container">
            {projects.map((project) => (
                <Project 
                    key={project.id}
                    project = {project}
                />
            ))}
        </div>
    );
}

export default Projects;