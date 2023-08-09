import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { formatObject } from "../../lib/common";
import ProjectCard from '../ProjectCard/ProjectCard';

import './Projects.scss'

async function getProjects() {
    try {
      const response = await axios({
        method: 'GET',
        url: 'http://localhost:4000/projects',
      });
      console.log("getProjects DATA");
      console.log(response.data);
      const projects = formatObject(response.data);
      return projects;
    } catch (err) {
      console.error(err);
      return [];
    }
}


function Projects() {
    const [projects, setProjects] = useState(null);
    const [projectsLoading, setProjectsLoading] = useState(true);

    const displayProjects = () => (projects ? projects.map((project) => <ProjectCard project={project} key={project._id} />) : <h1>Vide</h1>);

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

    return(
        <div className="projects-container" id='projects'>
            <h3>Mes projets</h3>
            <div className="projects-grid">
                {projectsLoading ? <h3>Chargement des projets</h3> : displayProjects()}
            </div>
        </div>
    )
}

export default Projects