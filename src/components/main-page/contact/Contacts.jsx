import Contact from './Contact';
import './Contacts.css';
import contactsData from '@src/data/contacts.json';
import {Window} from '../../General'

export function Contacts(){
    const contacts = contactsData;
    return (
        <Window
            className="contacts-container"
            classContentName="contacts-content-container"
            title="Contact"
        >
            {contacts.map((contact) => (
                            <Contact 
                                key={contact.id}
                                contact = {contact}
                            />
                        ))}
        </Window>
    )
}

export default Contacts;