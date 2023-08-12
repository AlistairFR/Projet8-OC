import './SkillBar.scss'

function SkillBar({ skill }) {
    return (
        <article className='skill-container'>
            <h4>{skill.title}</h4>
            <div className='progress'>
                <div className="progress-value">{skill.percentage}</div>
            </div>
        </article>
    )
}

export default SkillBar