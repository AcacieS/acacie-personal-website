import './AboutMeDescription.css'
import {Window} from '../../General'

function AboutMeDescription(){
  return (
    <Window 
        className = "about-me-container"
        classContentName="about-me-content-container"
        title="About Me"
    >
        <div>
            Hey there! <br />
            I'm Acacie, a Computer Science student at McGill who loves coding and making things. <br />
            I've joined 21+ competitions like hackathon, game jam and capture-the-flag, worked on all kinds of projects, <br />
            and I'm always messing around with new ideas and technologies. <br />
            To me, coding is a form of art: <br />
            it's about taking an idea and turning it into something real.
        </div>
    </Window>
  );
}

export default AboutMeDescription