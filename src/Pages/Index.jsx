import React, { useState } from 'react';
import HeroSection from '../Component/HeroSection/Index';

import InfoSection from '../Component/InfoSection/Index';
import Navbar from '../Component/Navbar/Index';
import SideBar from '../Component/SideBar/Index';
import { homeObgFour, homeObgOne, homeObgthree, homeObgtwo } from '../Component/InfoSection/Data';
import Services from '../Component/Services/Index';
import Footer from '../Component/Footer/Index';

const Home = () => {
    const [isOpen ,setIsopen] = useState(false)

     const toggle = ()=> {
        setIsopen(!isOpen)
     }

    return (
        <div>
        <Navbar toggle={toggle} />
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <HeroSection />
        <InfoSection {...homeObgOne}/>
        <InfoSection {...homeObgtwo}/>
        <InfoSection {...homeObgthree}/>
        <InfoSection {...homeObgFour}/>
        <Services />
        <Footer />
        
        </div>
    );
};

export default Home;