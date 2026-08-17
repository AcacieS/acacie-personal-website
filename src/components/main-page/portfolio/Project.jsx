import './Project.css';
import {Window, Link} from '../../General'

export function Project({title, language, date, img, features, link}){

    return (
    <Window
        className={`project-container`}
        classContentName = "project-content-container"
        title={title}
    >
        <div className="project-img-language-date-content">
            <img className="project-img" src={img} />
            <div className="project-language-date">
                <div className="project-language">{language}</div>
                <div className="project-date">{date}</div>
            </div>
        </div>
        
        <div>
            <div className="project-features">
                {features.map((line, index) => (
                    <div key={index}>- {line}</div>
                ))}
            </div>
        </div>
        <Link className="project-link" to={link}>More Info</Link>
    </Window>
    );
}
export default Project; 