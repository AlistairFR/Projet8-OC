import Banner from '../components/Banner'
import About from '../components/About'
import Skills from '../components/Skills'

import '../styles/Main.scss'

function Main() {
    return (
        <main className="main">
            <Banner />
            <About />
            <Skills />
        </main>
    )
}

export default Main