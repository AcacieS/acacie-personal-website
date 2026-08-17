import './Education.css';

export function Education({education}){
    return (
        <div className="education-container">
            <div>
                <img className="education-img" src={education.img}/>
            </div>
            <div>
                <div className="education-schoolName">{education.schoolName}</div>
                <div className="education-title">{education.title}</div>
                <div className="education-date">{education.date}</div>
            </div>
        </div>
    )
}

export default Education;