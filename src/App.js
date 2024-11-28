import './App.css';
import {useEffect} from "react";
import Aos from 'aos';

import Header from './components/Header/header';
import Footer from './components/Footer/Footer';
import Hero from './components/UI/Hero';
import Serices from './components/UI/Services';
import Portfoilo from './components/UI/Portfoilo'
import Contact from './components/UI/Contact';

function App() {
  useEffect(() => {
    Aos.init()
  }, [])
  
  return (
    <>
      <Header />     
      <main>
        <Hero />
        <Serices />
        <Portfoilo />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
