import React from 'react'
import Hero from './components/sections/Hero';
import ShowCaseSection from './components/sections/ShowCaseSection';
import NavBar from './components/NavBar';
import LogoSection from './components/sections/LogoSection';
import FeatureCard from './components/sections/FeatureCard';
import WorkExperience from './components/sections/workexperience';
import TheckStack from './components/sections/TheckStack';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

const App = () => {
    return (
        <>
            <NavBar/>
            <Hero/>
            <ShowCaseSection/>
            <LogoSection/>
            <FeatureCard/>
            <WorkExperience />
            <TheckStack />
            <Contact />
            <Footer />
            </>
    )
}
export default App;