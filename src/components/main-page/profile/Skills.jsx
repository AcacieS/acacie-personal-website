import Skill from './Skill'
import skillsData from '@src/data/skills.json';
import {Window} from '../../General' 
import './Skills.css';

export function Skills(){
    const skills = skillsData;
    return (
        <Window
            className="skills-container" 
            classContentName="skills-content-container"
            title="Skills"
        >
            {skills.map((skill) => (
                <Skill 
                    key={skill.id}
                    skill = {skill}
                />
            ))}
        </Window>
    )
}

export default Skills;