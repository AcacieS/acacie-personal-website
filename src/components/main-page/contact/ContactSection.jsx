import {SectionTitle, Section} from '../../General'
import Contacts from './Contacts'
import './ContactSection.css';

export function ContactSection(){
    
    return (
        <Section className="contact-section-container">
            <SectionTitle title = "Contact"></SectionTitle>
            <Contacts />
        </Section>
    )
}

export default ContactSection;