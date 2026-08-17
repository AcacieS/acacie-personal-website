import './Skill.css';

export function Skill({skill}){
    return (
        <div className="skill-container">
            <div>
                <div className="skill-name">{skill.name}</div>
                <div className="skill-description">{skill.codeLanguages}</div>
            </div>
            <img className="skill-logo" src={skill.img}/>
        </div>
    )
}

export default Skill;