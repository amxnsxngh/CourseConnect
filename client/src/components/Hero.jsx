import React, { useRef } from 'react';
import Section from './Section.jsx';
import { curve, heroBg } from "../constants/index.js";
import Button from "./Button.jsx";
import { BackgroundCircles, Gradient, BottomLine } from "./design/Hero.jsx";

import { ScrollParallax } from "react-just-parallax";

const Hero = () => {
    const parallaxRef = useRef(null);
    return (
        <Section className="pt-[6rem] -mt-[0.65rem]"
                 crosses
                 crossesOffset="lg:translate-y-[5.25rem]"
                 customPaddings
                 id="hero"
        >
            <div className="container relative" ref={parallaxRef}>

                <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
                    <h1 className="h1 mb-6">
                        Empowering Education with&nbsp;
                        <span className="inline-block relative">
                            CourseConnect{""}
                            <img
                                src={curve}
                                className="absolute top-full left-0 w-full xl:-mt-2"
                                width={624}
                                height={28}
                                alt="Curve"
                            />
                        </span>
                    </h1>
                    <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                        Empower your learning with our curated selection of tutors available to fit your educational needs.
                        Be part of a community that encourages and nurtures your development.
                    </p>
                    <Button href="/students" white>
                        Get Started!
                    </Button>
                </div>

                <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                    <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                        <div className="relative bg-n-8 rounded-[1rem]">
                            <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

                            <div
                                className="aspect-[33/31] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/400] lg:aspect-[1024/490]">
                                <img src={heroBg}
                                     className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                                     width={1024}
                                     height={490}
                                     alt="Course Connect"
                                />
                            </div>
                        </div>
                    </div>
                    <ScrollParallax />
                    <BackgroundCircles />
                </div>
            </div>
            <BottomLine />
        </Section>
    );
};

export default Hero;
