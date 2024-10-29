import React, { useState } from 'react';
import Globe from "react-globe.gl";
import Button from "../components/design/Button.jsx";
import {copy, grid1, grid2, grid3, grid4, tick} from "../constants/index.js";

const About = () => {


    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src={grid1} alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Welcome to Our Tutoring Platform!</p>
                            <p className="grid-subtext">Dedicated to fostering student success, we provide personalized
                                tutoring sessions that make learning engaging and effective. Our mission is to help
                                students thrive in their academic journey.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src={grid2} alt="grid-2"
                             className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Our Tech Stack</p>
                            <p className="grid-subtext">Our tutoring platform utilizes React for dynamic user
                                interfaces, Tailwind CSS for responsive and modern styling, Node.js for our backend
                                services to ensure scalability and performance, and Three.js to create interactive and
                                engaging visual content. </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                                    lat: -26.2056, lng: 28.0337, text: "We're here to help!", color: "white", size: 50
                                }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">Flexible Scheduling</p>
                            <p className="grid-subtext">We offer flexible scheduling options to accommodate different
                                time zones and student needs. Whether it's one-on-one sessions or group studies, our
                                goal is to support every learner.</p>
                            <a href="/students">
                                <Button name="Get Started as a Student" isBeam containerClass="w-full mt-20" href="#contact"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src={grid3} alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Our Mission</p>
                            <p className="grid-subtext">Our mission is to inspire and motivate students to reach their full potential. We believe that with the right support and guidance, every student can overcome challenges and thrive in their studies. At Eduvos, we are dedicated to creating an inclusive and nurturing environment where learners feel empowered to explore their interests, develop critical thinking skills, and achieve academic success. By fostering a culture of collaboration and encouragement, we aim to equip students with the tools they need to navigate their educational journey confidently and excel in their future endeavors.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <div className="space-y-4">
                            <p className="grid-headtext ">For Tutors</p>
                            <p className="grid-subtext ">
                                Join our community of dedicated educators and access your dashboard to manage your
                                sessions, track student progress, and connect with learners. As a tutor on Eduvos,
                                you'll share your knowledge and collaborate with fellow educators, creating an enriching
                                environment that helps students thrive.
                            </p>

                            <a href="/tutors">
                                <Button name="Get Started as a Tutor" isBeam
                                        containerClass="w-full mt-4"/> {/* Increased mt-2 to mt-4 */}
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default About;
