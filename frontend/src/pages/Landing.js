import React, { useState, useEffect } from 'react';
import {getProjects, getSkills} from "../lib/common";

import Banner from '../components/Banner/Banner'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import ProjectCard from '../components/Projects/ProjectCard'
import Projects from '../components/Projects/Projects'

function Main() {
    const [projects, setProjects] = useState(null);
    const [skills, setSkills] = useState(null);
    const [loading, setLoading] = useState(true);

    const displayBooks = () => (projects ? projects.map((project) => <ProjectCard project={project} key={project._id} />) : <h1>Vide</h1>);
    const displaySkills = () => (skills ? skills.map((skill) => <Skills skill={skill} key={skill._id} />) : <h1>Vide</h1>);

    useEffect(() => {
        async function getProjectsList() {
          const data = await getProjects();
          if (data) {
            setProjects(data);
            setLoading(false);
          }
        }
        getProjectsList();
    }, []);

    useEffect(() => {
        async function getSkillsList() {
          const data = await getSkills();
          if (data) {
            setSkills(data);
            setLoading(false);
          }
        }
        getSkillsList();
    }, []);

    return (
        <main className="main">
            <Banner />
            <About />
            <Skills />
            <Projects />
        </main>
    )
}

export default Main