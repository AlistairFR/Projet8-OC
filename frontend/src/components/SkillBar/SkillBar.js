function SkillBar({ skill }) {
    return (
        <article>
            <h4>{skill.title}</h4>
            <p>{skill.percentage}</p>
        </article>
    )
}

export default SkillBar