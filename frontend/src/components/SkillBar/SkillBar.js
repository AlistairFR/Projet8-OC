import { gsap } from 'gsap'

import './SkillBar.scss'

gsap.config({
    nullTargetWarn: false
})

function SkillBar({ skill, skillId }) {
    return (
        <article className='skill-container'>
            <h4>{skill.title}</h4>
            <div className='progress'>
                <div className={skillId}>{skill.percentage}</div>
            </div>
        </article>
    )
}

export default SkillBar