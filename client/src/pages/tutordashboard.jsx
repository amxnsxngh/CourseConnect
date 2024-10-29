import React from 'react';
import {curve, star, emptystar, profileimg, students} from "../constants/index.js"; // Importing the students array
import Section from "../components/Section.jsx";

const TutorDashboard = () => {
    // Dummy data for the tutor
    const tutor = {
        name: 'Aman Singh',
        qualification: 'BSc in Computer Science',
        year: '3',
        modules: [
            'Data Structures',
            'Algorithms'
        ],

    };

    return (
        <Section
            className="pt-[6rem] -mt-[0.65rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="tutorapplication"
        >
            <div className="container mx-auto p-8 ">
                <h1 className="h1 mb-6 text-center">
                    <span className="inline-block relative mb-8 ">
                        Tutor Dashboard{""}
                        <img
                            src={curve}
                            className="absolute top-full left-0 w-full xl:-mt-2"
                            width={624}
                            height={28}
                            alt="Curve"
                        />
                    </span>
                </h1>
                {/* Top Half */}
                <div className="bg-gradient-to-r from-slate-200 to-slate-400 flex flex-col md:flex-row mb-8">
                    {/* Image Section */}
                    <div className="flex-shrink-0 md:w-1/3 p-4">
                        <img
                            src={profileimg}
                            alt={tutor.name}
                            className="w-full h-auto rounded-lg shadow-lg object-cover"
                        />
                    </div>

                    {/* Details Section */}
                    <div className="flex flex-col md:w-1/3 p-4 text-black">
                        <h1 className="text-3xl font-bold mb-4">{tutor.name}</h1>
                        <p className="text-lg mb-2"><strong>Qualification:</strong> {tutor.qualification}</p>
                        <p className="text-lg mb-2"><strong>Year:</strong> {tutor.year}</p>
                        <h2 className="text-xl font-semibold mb-2">Modules:</h2>
                        <ul className="list-disc pl-5">
                            {tutor.modules.map(module => (
                                <li key={module} className="text-lg">{module}</li>
                            ))}
                        </ul>
                        <div className="text-lg mt-4">
                            <strong>Rating:</strong>
                            <div className="flex items-center gap-2 mt-2">
                                {Array.from({length: 5}).map((_, index) => (
                                    <img
                                        key={index}
                                        src={index < 5 ? star : emptystar} // 4 stars filled, 1 empty
                                        alt={index < 5 ? 'Filled Star' : 'Empty Star'}
                                        className="w-5 h-5"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Description Section */}
                    <div className="flex flex-col md:w-1/3 p-4 text-black">
                        <h2 className="text-xl font-semibold mb-4">About the Tutor</h2>
                        <p className="text-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
                        </p>
                    </div>
                </div>

                {/* Students Grid */}
                <div className="pb-12">
                    <h2 className=" text-center text-2xl font-semibold mb-4">Upcoming Lessons</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
                        {students.map((student) => (
                            <div key={student.studentNumber} className="w-full h-full">
                                <div
                                    className="text-n-8 border border-black-300 bg-gradient-to-r from-slate-200 to-slate-400 rounded-lg sm:p-7 p-4 flex flex-col gap-3 cursor-pointer">
                                    <h2 className="text-xl font-semibold mb-2 text-black">{student.fullName}</h2>
                                    <p className=" text-base">Module: {student.module}</p>
                                    <p className=" text-base">Qualification: {student.qualification}</p>
                                    <p className=" text-base">Year of Study: {student.yearOfStudy}</p>
                                    <p className=" text-base">Booking Date: {student.bookingDate}</p>
                                    <p className=" text-base">Booking Time: {student.bookingTime}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default TutorDashboard;
