import React from 'react';

// css
import './assets/css/main.css';

// components
import Navbar from './assets/components/Navbar';
import Works from './assets/components/Works';
import About from './assets/components/About';
import Home from './assets/components/Home';
import Services from './assets/components/Services';

function App() {
    const navsList = [
        { title: 'home', component: <Home /> },
        { title: 'services', component: <Services /> },
        // { title: 'about', component: <About /> },
        // { title: 'works', component: <Works /> },
        // { title: 'contact', component: <Works /> },
      ]
    
    return (
      <div className='relative w-screen min-h-screen'>
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
      </div>
    )
}

export default App