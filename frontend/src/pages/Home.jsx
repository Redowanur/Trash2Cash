import HeroSection from './../components/HeroSection';
import WorkFlow from './../components/WorkFlow';
import Stats from './../components/Stats';
import { useState } from 'react';

const Home = () => {
    return (
        <>
            <HeroSection/>
            <WorkFlow/>
            <Stats/>
        </>
    )
}

export default Home