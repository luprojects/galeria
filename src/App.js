import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import logo from './lmlogo.png';
import './App.css';
import particlesOptions from "./particles.json";
import Slider from './components/slide/Slider';
import Sound from './components/sound/Sound';

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit} />
            <img id='logo' src={logo} className="App-logo" alt="logo" />
            <header className="App-header">
                <>
                <Slider />
                <Sound />
                </>
            </header>
        </div>
    );
}

export default App;
