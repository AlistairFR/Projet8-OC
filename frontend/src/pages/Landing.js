import React, { useState, useEffect } from 'react';
import {getProjects, getSkills} from "../lib/common";

import Banner from '../components/Banner/Banner'
import About from '../components/About/About'
import SkillBar from '../components/SkillBar/SkillBar';
import Skills from '../components/Skills/Skills'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import Projects from '../components/Projects/Projects'

function Main() {
    const [projects, setProjects] = useState(null);
    const [skills, setSkills] = useState(null);
    const [skillsLoading, setSkillsLoading] = useState(true);
    const [projectsLoading, setProjectsLoading] = useState(true);

    const displayProjects = () => (projects ? projects.map((project) => <ProjectCard project={project} key={project._id} />) : <h1>Vide</h1>);
    const displaySkills = () => (skills ? skills.map((skill) => <SkillBar skill={skill} key={skill._id} />) : <h1>Vide</h1>);

    useEffect(() => {
        async function getProjectsList() {
          const data = await getProjects();
          if (data) {
            setProjects(data);
            setProjectsLoading(false);
          }
        }
        getProjectsList();
    }, []);

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
            <section className='projects-section'>
              {projectsLoading ? <h3>Chargement des projets</h3> : displayProjects()}
            </section>
            <Projects />
        </main>
    )
}

export default Main