import { gsap } from 'gsap'

import './SkillBar.scss'

function SkillBar({ skill }) {
    //Animation gsap de la progress bar
    gsap.fromTo('.progress-value', {width: 0}, {
        width: `95%`,
        duration: 2.5,
        ease: "power3.out",
    });

    return (
        <article className='skill-container'>
            <h4>{skill.title}</h4>
            <div className='progress'>
                <div className='progress-value'>{skill.percentage}</div>
            </div>
        </article>
    )
}

export default SkillBar