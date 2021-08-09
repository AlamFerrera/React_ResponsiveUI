import React, { useState } from 'react';
import Footer from '../componentes/Footer';
import HeroSection from '../componentes/HeroSection';
import InfoSection from '../componentes/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../componentes/InfoSection/Data';
import Navbar from '../componentes/Navbar';
import Services from '../componentes/Servicios';
import Sidebar from '../componentes/Sidebar';

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen = {isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection/>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjThree} />
            <Footer />
        </>
    )
}

export default Home
