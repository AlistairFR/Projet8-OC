import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { formatObject } from "../../lib/common";
import SkillBar from '../SkillBar/SkillBar';

import './Skills.scss'

async function getSkills() {
    try {
      const response = await axios({
        method: 'GET',
        url: '/skills',
      });
      const skills = formatObject(response.data);
      return skills;
    } catch (err) {
      console.error(err);
      return [];
    }
}

function Skills() {
    const [skills, setSkills] = useState(null);
    const [skillsLoading, setSkillsLoading] = useState(true);

    const displaySkills = () => {
      if (skills) {
        const skillBars = [];
        for (let i = 0; i < skills.length; i++) {
          skillBars.push(<SkillBar skill={skills[i]} key={skills[i].id} />);
        }
        return skillBars;
      } else {
        return <h1>Vide</h1>;
      }
    };

    useEffect(() => {
        async function getSkillsList() {
          const data = await getSkills();
          if (data) {
            setSkills(data);
            setSkillsLoading(false);
          }
        }
        getSkillsList();
    }, []);

    return(
        <div className="skills-container">
            <h3>Mes compétences</h3>
            <div className='skills-grid'>
                {skillsLoading ? <h3>Chargement des compétences</h3> : displaySkills()}
            </div>
        </div>
    )
}

export default Skills