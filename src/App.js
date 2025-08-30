import React from 'react';

import ReactLenis from 'lenis/react';
// css
import './assets/css/main.css';

// components
import Navbar from './assets/components/Navbar';

// pages
import Home from './assets/pages/home/Home';
import Services from './assets/pages/services/Services';
import About from './assets/pages/about/About';
import Skills from './assets/pages/skills/Skills';
import Experience from './assets/pages/experiences/Experience';
import Works from './assets/pages/works/Works';
import Values from './assets/pages/values/Values';
import Contact from './assets/pages/contact/Contact';

// gsap
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)

function App() {
    const navsList = [
        { title: 'home', component: <Home /> },
        { title: 'services', component: <Services /> },
        { title: 'about', component: <About /> },
        { title: 'skills', component: <Skills /> },
        { title: 'experiences', component: <Experience /> },
        { title: 'works', component: <Works /> },
        { title: 'values', component: <Values /> },
        { title: 'contact', component: <Contact /> },
    ]
    
    return (
      <>
        <ReactLenis root className='relative w-screen min-h-screen'>
          <Navbar navsList={navsList} />
          {
            navsList.map(item => {
              return (
                <section key={item.title} id={item.title}>
                  { item.component }
                </section>
              )
            })
          }
        </ReactLenis>
      </>
    )
}

export default App