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