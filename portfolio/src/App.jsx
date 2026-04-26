import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      
      {loading ? (
        <div className="h-screen w-full flex items-center justify-center bg-background fixed inset-0 z-[10000]">
          <div className="text-primary text-4xl font-extrabold animate-pulse tracking-widest uppercase">
            LOADING.
          </div>
        </div>
      ) : (
        <div className="relative bg-background text-text-main w-full overflow-hidden">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Services />
            <Projects />
            <Testimonials />
            <FAQ />
            <Contact />
          </main>
        </div>
      )}
    </>
  )
}

export default App
