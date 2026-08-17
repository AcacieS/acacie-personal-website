import {SectionTitle, Section} from '../../General'
import Experiences from './Experiences'
import Skills from './Skills'
import Educations from './Educations';
import './ProfileSection.css';

export function ProfileSection(){
    
    return (
        <Section className="profile-section-container">
            <SectionTitle title = "Installed Programs"></SectionTitle>
            <div className="profile-content-section-container">
                <Skills />
                <Experiences />
                <Educations />
            </div>
            
        </Section>
    )
}

export default ProfileSection;