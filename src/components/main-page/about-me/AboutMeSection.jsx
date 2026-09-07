import {SectionTitle, Section} from '../../General'
import Profile from './Profile'
import AboutMeDescription from './AboutMeDescription'
import './AboutMeSection.css';

export function AboutMeSection(){
    
    return (
        <Section className="about-me-section-container">
            <SectionTitle title = "Acacie Song Portfolio.EXE"></SectionTitle>
            {/* <img className="about-me-title" src="/Images/acacieBanner.jpg"/> */}
            <div className="about-me-information">
                <div className="about-me-profile-contacts-container">
                    <Profile />
                </div>
                
                <div className="about-me-description-information">
                    <AboutMeDescription />
                    {/* <div className="about-me-contacts">
                        <Contacts />
                    </div> */}
                </div>
                
            </div>
        </Section>
    )
}

export default AboutMeSection;