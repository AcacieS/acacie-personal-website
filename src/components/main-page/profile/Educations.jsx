import './Educations.css';
import Education from './Education';
import educationsData from '@src/data/educations.json';
import {Window} from '../../General'

export function Educations(){
    const educations = educationsData.slice(0,2);
    return (
        <Window
            className="educations-container"
            classContentName="educations-content-container"
            title="Education"
        >
            {educations.map((education) => (
                            <Education 
                                key={education.id}
                                education = {education}
                            />
                        ))}
        </Window>
    )
}

export default Educations;