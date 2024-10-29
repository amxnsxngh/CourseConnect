import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from "../components/Section.jsx";
import {curve, star, tutors, emptystar, profileimg, filter} from "../constants/index.js";
import { BackgroundCircles } from "../components/design/Hero.jsx";

const Tutorlist = () => {
    const [selectedQualification, setSelectedQualification] = useState('');
    const [selectedModule, setSelectedModule] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [searchModule, setSearchModule] = useState('');

    // Create unique lists of qualifications, years, and modules for filtering
    const qualifications = [...new Set(tutors.map(tutor => tutor.qualification))];
    const years = [...new Set(tutors.map(tutor => tutor.year))].sort((a, b) => a - b); // Sort years in ascending order
    const modules = [...new Set(tutors.flatMap(tutor => tutor.modules))];

    const filteredTutors = tutors.filter(tutor => {
        const matchesQualification = selectedQualification ? tutor.qualification === selectedQualification : true;
        const matchesYear = selectedYear ? tutor.year === Number(selectedYear) : true;
        const matchesModule = selectedModule ? tutor.modules.includes(selectedModule) : true;
        const matchesSearchModule = searchModule ? tutor.modules.some(module => module.toLowerCase().includes(searchModule.toLowerCase())) : true;

        return matchesQualification && matchesYear && matchesModule && matchesSearchModule;
    });

    // Function to clear all filters
    const clearAllFilters = () => {
        setSelectedQualification('');
        setSelectedModule('');
        setSelectedYear('');
        setSearchModule('');
    };

    // Function to remove individual filters
    const removeFilter = (filterType) => {
        switch (filterType) {
            case 'qualification':
                setSelectedQualification('');
                break;
            case 'module':
                setSelectedModule('');
                break;
            case 'year':
                setSelectedYear('');
                break;
            default:
                break;
        }
    };

    return (
        <Section
            className="pt-[6rem] -mt-[0.65rem] "
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="tutorapplication"
        >
            <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-4 md:mb-10 lg:mb-12">
                <h1 className="h1 mb-6 text-center">
                    <span className="inline-block relative ">
                        Choose Your Tutor{""}
                        <img
                            src={curve}
                            className="absolute top-full left-0 w-full xl:-mt-2"
                            width={624}
                            height={28}
                            alt="Curve"
                        />
                    </span>
                </h1>
            </div>

            {/* Centered Filter System */}
            <div className="max-w-3xl mx-auto mb-6 text-center">
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
                    {/* Filter Icon */}
                    <div className="flex items-center">
                        <img
                            src={filter}  // Replace with the actual path to your SVG
                            alt="Filter"
                            className="h-max w-max text-gray-500" // Adjust size as needed
                        />
                    </div>
                    <select
                        value={selectedQualification}
                        onChange={(e) => setSelectedQualification(e.target.value)}
                        className="border border-gray-300 p-2 rounded cursor-pointer"
                    >
                        <option value="">Select Qualification</option>
                        {qualifications.map((qualification, index) => (
                            <option key={index} value={qualification}>{qualification}</option>
                        ))}
                    </select>
                    <select
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                        className="border border-gray-300 p-2 rounded cursor-pointer"
                    >
                        <option value="">Select Year</option>
                        {years.map((year, index) => (
                            <option key={index} value={year}>{year}</option>
                        ))}
                    </select>
                    <select
                        value={selectedModule}
                        onChange={(e) => setSelectedModule(e.target.value)}
                        className="border border-gray-300 p-2 rounded cursor-pointer"
                    >
                        <option value="">Select Module</option>
                        {modules.map((module, index) => (
                            <option key={index} value={module}>{module}</option>
                        ))}
                    </select>
                </div>

                {/* Selected Filters Display */}
                <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
                    {selectedQualification && (
                        <div className="bg-gray-200 text-black px-3 py-1 rounded-full flex items-center">
                            {selectedQualification}
                            <button
                                onClick={() => removeFilter('qualification')}
                                className="ml-2 text-gray-500 hover:text-gray-700 cursor-pointer"
                            >
                                &times;
                            </button>
                        </div>
                    )}
                    {selectedYear && (
                        <div className="bg-gray-200 text-black px-3 py-1 rounded-full flex items-center">
                            {selectedYear}
                            <button
                                onClick={() => removeFilter('year')}
                                className="ml-2 text-gray-500 hover:text-gray-700 cursor-pointer"
                            >
                                &times;
                            </button>
                        </div>
                    )}
                    {selectedModule && (
                        <div className="bg-gray-200 text-black px-3 py-1 rounded-full flex items-center">
                            {selectedModule}
                            <button
                                onClick={() => removeFilter('module')}
                                className="ml-2 text-gray-500 hover:text-gray-700 cursor-pointer"
                            >
                                &times;
                            </button>
                        </div>
                    )}
                </div>

                {/* Clear All Filters Button */}
                {(selectedQualification || selectedYear || selectedModule) && (
                    <div className="flex justify-center mb-6">
                        <button
                            onClick={clearAllFilters}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
                        >
                            Clear All Filters
                        </button>
                    </div>
                )}
            </div>

            <div className="pb-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
                    {filteredTutors.length > 0 ? (
                        filteredTutors.map((tutor) => (
                            <div key={tutor.id} className="w-full h-full">
                                <Link to={tutor.url} className="block">
                                    <div
                                        className="border border-black-300 bg-gradient-to-r from-slate-200 to-slate-400 rounded-lg sm:p-7 p-4 flex flex-col gap-3 cursor-pointer">
                                        <img
                                            src={profileimg}
                                            alt={tutor.name}
                                            className="w-full h-48 object-contain mb-4 border-b-black-300 border-b-2"
                                        />
                                        <h2 className="text-xl font-semibold mb-2 text-n-8 font-generalsans">{tutor.name}</h2>
                                        <div className="flex justify-between items-center gap-2">
                                            {Array.from({ length: 5 }).map((_, index) => (
                                                <img
                                                    key={index}
                                                    src={index < tutor.rating ? star : emptystar}
                                                    alt={index < tutor.rating ? 'Filled Star' : 'Empty Star'}
                                                    className="w-5 h-5"
                                                />
                                            ))}
                                        </div>
                                        <p className="text-n-8 text-base font-generalsans">{tutor.qualification}</p>
                                        <p className="text-n-8 text-base font-generalsans">Year: {tutor.year}</p>
                                        <div className="mt-2 flex flex-wrap gap-2 justify-center">
                                            {tutor.modules.map((module) => (
                                                <span key={module} className="bg-black text-n-1 px-2 py-1 rounded-full text-sm">
                                                    {module}
                                                </span>
                                            ))}
                                        </div>
                                        <Link to={tutor.url}>
                                            <button
                                                className="w-full bg-black text-white py-2 rounded hover:bg-n-4 hover:text-black transition duration-200 mt-4">
                                                Book Session
                                            </button>
                                        </Link>
                                    </div>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <div
                            className="col-span-1 sm:col-span-2 lg:col-span-3 flex items-center justify-center min-h-[50vh]">
                            <div className="text-center">
                                <h3 className="text-lg font-semibold">No tutors found matching your criteria.</h3>
                                <p>More tutors will join soon, please check back later!</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Section>
    );
};

export default Tutorlist;
