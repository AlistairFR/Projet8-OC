import './SkillBar.scss'

function SkillBar({ skill }) {
    return (
        <article className='skill-container'>
            <div className="skill-inset">
                <i className={skill.imageUrl}></i>
                <h4>{skill.title}</h4>
            </div>
        </article>
    )
}

export default SkillBar