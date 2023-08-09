import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { formatObject } from "../../lib/common";
import SkillBar from '../SkillBar/SkillBar';

import './Skills.scss'

async function getSkills() {
    try {
      const response = await axios({
        method: 'GET',
        url: 'http://localhost:4000/skills',
      });
      console.log("getSkills DATA");
      console.log(response.data);
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

    const displaySkills = () => (skills ? skills.map((skill) => <SkillBar skill={skill} key={skill._id} />) : <h1>Vide</h1>);

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