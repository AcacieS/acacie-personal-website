import Projects from './Projects'
import PortfolioLanguages from './PortfolioLanguages'
import {SectionTitle, Section} from '../../General'
import './PortfolioSection.css';
import { useState } from 'react'
import projectsData from '@src/data/projects/gameProjects.json'; 

export function PortfolioPage(){
    const [projects, setProjects] = useState(
        projectsData.slice(0, 3));

    return (
        <Section className="portfolio-page-container">
            <SectionTitle 
                title = "Project"
            />
            <PortfolioLanguages
                setProjects = {setProjects}
            />
            <Projects 
                projects = {projects}
            />
            {/* <Link className="project-link" to={"/main/portfolio"}>More Projects To see</Link> */}
            {/* <PortfolioLink/> */}
        </Section>
    )
}

export default PortfolioPage;