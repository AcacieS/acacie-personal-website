import './Contact.css';

export function Contact({contact}){
    return (
        <div className="contact-container">
            <img
                className="contact-img"
                src={contact.img}
                alt={contact.name}
            />
            {contact.link && (
                <a
                className="contact-link-container"
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                >
                {contact.name}  
                </a>
            )}

            {contact.reference && (
                <div>
                    {contact.reference}
                </div>
                
            )}
            
        </div>
        
    )
}

export default Contact;