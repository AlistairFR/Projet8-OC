import Banner from '../components/Banner/Banner'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'

import './Landing.scss'

function Main() {
    return (
        <main className="main">
            <Banner />
            <About />
            <Skills />
            <Projects />
        </main>
    )
}

export default Main