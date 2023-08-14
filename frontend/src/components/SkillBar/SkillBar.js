import './SkillBar.scss'

function SkillBar({ skill }) {
    return (
        <article className='skill-container'>
            <i className={skill.imageUrl}></i>
            <h4>{skill.title}</h4>
        </article>
    )
}

export default SkillBar