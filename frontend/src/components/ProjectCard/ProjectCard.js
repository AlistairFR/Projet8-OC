import './ProjectCard.scss'

function ProjectCard({ project }) {
    const replace = project.title.replace(/\s+/g, '');
    const imageUrl = `${process.env.PUBLIC_URL}${project.imageUrl}`
    return (
        <article className={replace}>
            <div className="project-text">
                <h4>{project.title}</h4>
                <p className='project-desc'>{project.desc}</p>
                <div className="project-hidden">
                    <p className='project-descLong'>{project.descLong}</p>
                    <div className="project-links">
                        <a href={project.repoUrl} target="_blank" rel="noreferrer">
                            <i className="fa-solid fa-arrow-up-right-from-square" style={{color: "#00ffd5"}}/>
                            Repo GitHub
                        </a>
                        <a href={project.demoUrl} target="_blank" rel="noreferrer">
                            <i className="fa-solid fa-arrow-up-right-from-square" style={{color: "#00ffd5"}}/>
                            Live demo
                        </a>
                    </div>
                </div>
            </div>
            <img src={imageUrl} alt={project.title} />
        </article>
    )
}

export default ProjectCard