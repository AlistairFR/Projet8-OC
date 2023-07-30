import Banner from '../components/Banner'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

import '../styles/Main.scss'

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