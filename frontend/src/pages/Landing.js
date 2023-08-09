import React, { useState, useEffect } from 'react';
import {getProjects, getSkills} from "../lib/common";

import Banner from '../components/Banner/Banner'
import About from '../components/About/About'
import SkillBar from '../components/SkillBar/SkillBar';
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'

function Main() {
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

    return (
        <main className="main">
            <Banner />
            <About />
            <section className='skills-section'>
              {skillsLoading ? <h3>Chargement des compétences</h3> : displaySkills()}
            </section>
            <Skills />
            <Projects />
        </main>
    )
}

export default Main