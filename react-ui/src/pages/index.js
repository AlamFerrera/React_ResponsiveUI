import React, { useState } from 'react';
import HeroSection from '../componentes/HeroSection';
import Navbar from '../componentes/Navbar';
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
        </>
    )
}

export default Home
