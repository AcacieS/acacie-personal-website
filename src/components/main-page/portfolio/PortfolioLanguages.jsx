import PortfolioLanguage from './PortfolioLanguage'
import skillsData from '@src/data/skills.json';
import {Window} from '../../General' 
import { useState } from 'react'

import gameProjects from '@src/data/projects/gameProjects.json';
import webProjects from '@src/data/projects/webProjects.json';
import dataProjects from '@src/data/projects/dataProjects.json';
import softwareProjects from '@src/data/projects/softwareProjects.json';
import systemsProjects from '@src/data/projects/systemsProjects.json';

import './PortfolioLanguages.css';


const projectsByLanguage = {
    'Game': gameProjects,
    'Web': webProjects,
    'Data': dataProjects,
    'Software': softwareProjects,
    'Systems': systemsProjects
};
export function PortfolioLanguages({setProjects}){
    const skills = skillsData;
    // First language is active by default
    const [activeLanguage, setActiveLanguage] = useState(skills[0].id);
    function selectLanguage(skill) {
        setActiveLanguage(skill.id);

        const projects = projectsByLanguage[skill.id]?.slice(0, 3) || [];
        setProjects(projects);
    }

    return (
        <Window classContentName="portfolio-languages-container">
            {skills.map((skill) => (
                <PortfolioLanguage 
                    key={skill.id}
                    {...skill}
                    active={activeLanguage === skill.id}
                    setProjects = {setProjects}
                    onSelect={() => selectLanguage(skill)}
                />
            ))}
        </Window>
    )
}

export default PortfolioLanguages;