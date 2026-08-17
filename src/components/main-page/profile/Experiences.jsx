import './Experiences.css';
import Experience from './Experience';
import experiencesData from '@src/data/experiences.json';
import {Window} from '../../General'

export function Experiences(){
    const experiences = experiencesData;
    return (
        <Window
            className="experiences-container"
            classContentName="experiences-content-container"
            title="Experience"
        >
            {experiences.map((experience) => (
                            <Experience 
                                key={experience.id}
                                experience = {experience}
                            />
                        ))}
        </Window>
    )
}

export default Experiences;