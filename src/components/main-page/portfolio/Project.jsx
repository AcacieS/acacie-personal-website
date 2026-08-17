import './Project.css';
import {Window, Link, FormattedText, Reference} from '../../General'

export function Project({project}){

    return (
    <Window
        className={`project-container`}
        classContentName = "project-content-container"
        title={project.title}
    >
        <div className="project-img-language-date-content">
            {project.img && (
                <img className="project-img" src={project.img} />
            )}
            <div className="project-language-date">
                <div className="project-language">{project.language}</div>
                <div className="project-date">{project.date}</div>
            </div>
        </div>
        
        <div>
            <div className="project-features">
                {project.features.map((line, index) => (
                    <div key={index}>
                        - <FormattedText text={line} />
                    </div>
                ))}
            </div>
        </div>
        <div className="project-reference-container">
            <Link className="project-link" to={project.pageLink}>More Info</Link>
            <div className="project-references">
                {project.links.map((link, index) => (
                    <div key={index}>
                        <Reference link = {link} />
                    </div>
                ))}
            </div>
        </div>
    </Window>
    );
}
export default Project; 