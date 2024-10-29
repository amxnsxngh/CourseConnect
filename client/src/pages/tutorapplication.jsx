import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Section from "../components/Section.jsx";
import {arrowup, curve} from "../constants/index.js"; // Importing the Section component

const qualifications = [
    'BSc in Computer Science',
    'BCom in Accounting',
    'BA in English Literature'
];

const years = [
    '1',
    '2',
    '3'
];

const TutorApplication = () => {
    const formRef = useRef(); // Create a ref for the form
    const navigate = useNavigate(); // Using useNavigate instead of useHistory

    const [tutorData, setTutorData] = useState({
        name: '',
        qualification: '',
        year: '',
        modules: [],
        rating: '',
        url: '',
        description: '',
        bookingDate: '',
        bookingTime: '',
        transcript: null // Add transcript state
    });

    const [loading, setLoading] = useState(false); // Loading state for button
    const [moduleInput, setModuleInput] = useState(''); // Input for new module

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTutorData({ ...tutorData, [name]: value });
    };

    const handleModuleChange = (e) => {
        setModuleInput(e.target.value); // Handle input for new module
    };

    const addModule = (e) => {
        e.preventDefault();
        if (moduleInput) {
            setTutorData((prevState) => ({
                ...prevState,
                modules: [...prevState.modules, moduleInput] // Add new module to the array
            }));
            setModuleInput(''); // Reset the input field
        }
    };

    const removeModule = (index) => {
        setTutorData((prevState) => ({
            ...prevState,
            modules: prevState.modules.filter((_, i) => i !== index) // Remove module by index
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setTutorData((prevState) => ({
            ...prevState,
            transcript: file // Set the transcript file
        }));
    };

    const removeFile = () => {
        setTutorData((prevState) => ({
            ...prevState,
            transcript: null, // Clear the transcript file
        }));
        // Clear the file input by triggering a change event
        document.getElementById('transcript').value = ''; // Reset file input
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Data:', tutorData);
        setLoading(true);

        // Simulate a booking process with a timeout
        setTimeout(() => {
            // Reset the form after submission
            setTutorData({
                name: '',
                qualification: '',
                year: '',
                modules: [],
                rating: '',
                url: '',
                description: '',
                bookingDate: '',
                bookingTime: '',
                transcript: null // Reset transcript
            });
            setLoading(false);

            // Show alert message on successful submission
            alert('Your application has been submitted successfully! Your application will be reviewed by Eduvos staff before approval and you will be redirected to the tutor dashboard once approved.');

            // Redirect to tutor dashboard immediately
            navigate('/tutor-dashboard'); // Redirect after submission
        }, 2000); // Adjust delay as needed
    };

    return (
        <Section
            className="pt-[6rem] -mt-[0.65rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="tutorapplication"
        >
            <div className="py-8"> {/* Added padding here */}
                <h1 className="h1 mb-6 text-center">
                    <span className="inline-block relative ">
                        Tutor Application Form{""}
                        <img
                            src={curve}
                            className="absolute top-full left-0 w-full xl:-mt-2"
                            width={624}
                            height={28}
                            alt="Curve"
                        />
                    </span>
                </h1>
                <form ref={formRef} onSubmit={handleSubmit} className="mt-4 flex flex-col space-y-4 max-w-md mx-auto">
                    <div>
                        <label htmlFor="name" className="field-label text-white">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={tutorData.name}
                            onChange={handleChange}
                            required
                            className="field-input h-10 p-2 rounded-lg w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="qualification" className="field-label text-white">Qualification:</label>
                        <select
                            id="qualification"
                            name="qualification"
                            value={tutorData.qualification}
                            onChange={handleChange}
                            required
                            className="field-input h-10 p-2 rounded-lg w-full"
                        >
                            <option value="">Select Qualification</option>
                            {qualifications.map((qual, index) => (
                                <option key={index} value={qual}>{qual}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="year" className="field-label text-white">Year:</label>
                        <select
                            id="year"
                            name="year"
                            value={tutorData.year}
                            onChange={handleChange}
                            required
                            className="field-input h-10 p-2 rounded-lg w-full"
                        >
                            <option value="">Select Year</option>
                            {years.map((year, index) => (
                                <option key={index} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="modules" className="field-label text-white">Modules:</label>
                        <div className="flex flex-col space-y-2">
                            {tutorData.modules.map((module, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <div className="bg-gray-800 text-white p-2 rounded-lg">
                                        {module}
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => removeModule(index)}
                                        className="text-red-500 hover:underline ml-2"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                            <input
                                type="text"
                                id="modules"
                                value={moduleInput}
                                onChange={handleModuleChange}
                                placeholder="Add a module"
                                className="field-input h-10 p-2 rounded-lg w-full"
                            />
                            <button
                                onClick={addModule}
                                className="field-btn h-10 rounded-lg bg-blue-500 text-white"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="description" className="field-label text-white">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={tutorData.description}
                            onChange={handleChange}
                            required
                            className="field-input h-20 p-2 rounded-lg w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="transcript" className="field-label text-white">Transcript (PDF):</label>
                        <input
                            type="file"
                            id="transcript"
                            accept=".pdf"
                            onChange={handleFileChange}
                            className="field-input rounded-lg w-full"
                        />
                        {tutorData.transcript && (
                            <div className="flex items-center mt-2">
                                <span className="text-white">{tutorData.transcript.name}</span>
                                <button
                                    type="button"
                                    onClick={removeFile}
                                    className="text-red-500 hover:underline ml-2"
                                >
                                    Remove File
                                </button>
                            </div>
                        )}
                    </div>

                    <button className="field-btn h-10 rounded-lg bg-blue-500 text-white" type="submit"
                            disabled={loading}>
                        {loading ? 'Applying...' : 'Submit Application'}
                        <img src={arrowup} alt="arrow-up" className="field-btn_arrow inline ml-2"/>
                    </button>
                </form>
            </div>
        </Section>
    );
};

export default TutorApplication;
