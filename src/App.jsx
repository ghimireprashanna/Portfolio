// src/App.js
import { BallTriangle } from 'react-loader-spinner';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() =>{
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <>
    {
      loading ? 
      <div className='bg-slate-900 h-[100vh] flex justify-center items-center' >
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
      </div>
      :
      <div className='bg-slate-900'>
      <Navbar />
      <Banner />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      {/* Your other components/content goes here */}
    </div>
    }
    </>
    
  );
}

export default App;
