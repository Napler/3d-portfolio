import React from 'react';
import { words } from "../../constants/index.jsx";
import Button from "../Button.jsx";
import HeroExperience from "../Heromodels/Heroexperience.jsx";
import AnimatedCounter from "../AnimatedCounter.jsx";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo(
            '.hero-text h1',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 2,
                ease: "power2.inOut",
                stagger: 1.5,
            }
        );
    });

    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt={"background"}/>
            </div>
            <div className="hero-layout">
                {/* Hero content */}
                <div className="hero-content">
                    <div className="hero-text-wrapper">
                        <div className="hero-text">
                            <h1>Shaping
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word) => (
                                            <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                                <img
                                                    src={word.imgPath}
                                                    alt={word.text}
                                                    className="xl:size-12 md:size-10 size-7 md:p-2 rounded-full bg-white-50 shadow-md"
                                                />
                                                <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1>into Real Projects</h1>
                            <h1>that Deliver Results</h1>
                        </div>
                        <p className="text-white-50 md:text-xl relative z-10">
                            Hi I'am Bechir welcome to my portfolio.
                        </p>
                        <Button
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="button"
                            text="See my info"
                        />
                    </div>
                </div>

                {/* 3D model */}
                <div className="hero-model">
                    <HeroExperience />
                </div>
            </div>

            <AnimatedCounter/>
        </section>
    );
};

export default Hero;