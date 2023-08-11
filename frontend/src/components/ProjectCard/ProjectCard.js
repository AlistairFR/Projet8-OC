import './ProjectCard.scss'

function ProjectCard({ project }) {
    const replace = project.title.replace(/\s+/g, '');
    return (
        <article className={replace}>
            <h4>{project.title}</h4>
            <p>{project.desc}</p>
            <img src={project.imageUrl} alt="image non affichée" />
        </article>
    )
}

export default ProjectCard