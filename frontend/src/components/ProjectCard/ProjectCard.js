function ProjectCard({ project }) {
    return (
        <article>
            <h4>{project.title}</h4>
            <p>{project.desc}</p>
            <img src={project.imageUrl} alt="" />
        </article>
    )
}

export default ProjectCard