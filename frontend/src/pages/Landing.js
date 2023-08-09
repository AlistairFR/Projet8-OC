import React, { useState, useEffect } from 'react';

import Banner from '../components/Banner/Banner'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'

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