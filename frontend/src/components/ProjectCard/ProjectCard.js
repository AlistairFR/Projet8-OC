import './ProjectCard.scss'

function ProjectCard({ project }) {
    const replace = project.title.replace(/\s+/g, '');
    const imageUrl = `${process.env.PUBLIC_URL}${project.imageUrl}`
    return (
        <article className={replace}>
            <h4>{project.title}</h4>
            <p>{project.desc}</p>
            <img src={imageUrl} alt={project.title} />
        </article>
    )
}

export default ProjectCard