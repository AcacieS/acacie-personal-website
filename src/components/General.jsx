import { useNavigate } from 'react-router-dom';
import './General.css';

export function SectionTitle({ title }) {
    return <div className='title'>
        {title}
        <div className="title-circle"></div>
    </div>;
}
export function Window({ children, className = '', classContentName = '', title }) {
    return (
        <div className={`window ${className}`}>
            {title && (
                <div className="window-title-section">
                    <div className="window-title">{title}</div>
                    <div className="window-title-circles">
                        <div className="window-title-circle"></div>
                        <div className="window-title-circle"></div>
                    </div>
                </div>
            )}

            <div className={`window-content ${classContentName}`}>
                {children}
            </div>
        </div>
    );
}
export function SectionContent({ children, className = '' }) {
    return <div className={`section-content ${className}`}>{children}</div>;
}
export function Section({ children , className = '' }) {
    return <div className='section'>
        <SectionContent className={className}>
            {children}
        </SectionContent>
    </div>;
}

export function Link({ children, className = '', to }) {
    const navigate = useNavigate();

    return (
        <button
            className={`link ${className}`}
            onClick={() => navigate(to)}
        >
            {children}
        </button>
    );
}

export function FormattedText({ text }) {
    const parts = text.split("**");

    return (
        <>
            {parts.map((part, index) =>
                index % 2 === 1
                    ? <strong key={index}>{part}</strong>
                    : part
            )}
        </>
    );
}


export function Reference({ link }) {
    const images = {
        github: "/Images/Contacts/github.webp",
        itch: "/Images/Contacts/itch.svg",
        devpost: "/Images/Contacts/devpost.png"
    };

    let img;

    if (link.includes("github")) {
        img = images.github;
    } else if (link.includes("itch")) {
        img = images.itch;
    } else if (link.includes("devpost")) {
        img = images.devpost;
    }

    return (
        <a
            className="reference-link-container"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={img} />
        </a>
    );
}