import './Experience.css';
export function Experience({experience}){
    return (
        <div className="experience-container">
            <div className="experience-title-container">
                <img className="experience-logo" src={experience.img}/>
                <div className="experience-profile-container">
                    <div className="experience-name">{experience.companyName}</div>
                    <div className="experience-title">{experience.title}</div>
                    <div className="experience-date">{experience.date}</div>
                </div>
            </div>
            <div>
                <div className="experience-features">
                {experience.features.map((line, index) => (
                    <div key={index}>- {line}</div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Experience;