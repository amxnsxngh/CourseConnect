import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import { useParams } from 'react-router-dom';
import {arrowup, curve, emptystar,star, profileimg, tutors} from "../constants/index.js";
import Section from "../components/Section.jsx"; // Import tutors data

const TutorProfile = () => {
    const { id } = useParams(); // Get the tutor ID from the URL
    const tutor = tutors.find(t => t.id === parseInt(id)); // Find the tutor by ID

    if (!tutor) {
        return <div>Tutor not found!</div>; // Handle case where tutor is not found
    }

    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        fullName: '',
        studentNumber: '',
        email: '',
        module: '',
        qualification: '',
        yearOfStudy: '',
        bookingDate: '',
        bookingTime: ''
    });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                'service_k77txt7',  // Replace with your EmailJS service ID
                'template_pup2uut',  // Replace with your EmailJS template ID
                {
                    name: form.fullName, // Change to match template
                    studentNumber: form.studentNumber, // Change to match template
                    email: form.email, // Change to match template
                    module: form.module, // Change to match template
                    qualification: form.qualification, // Change to match template
                    yearOfStudy: form.yearOfStudy, // Change to match template
                    dateOfBooking: form.bookingDate, // Change to match template
                    timeOfBooking: form.bookingTime, // Change to match template
                },
                'P2bMynMCSoGOoTgVe'  // Replace with your EmailJS user ID
            );
            setLoading(false);
            alert('Your booking was sent successfully. Thank you!');
            setForm({
                fullName: '',
                studentNumber: '',
                email: '',
                module: '',
                qualification: '',
                yearOfStudy: '',
                bookingDate: '',
                bookingTime: ''
            });
        } catch (error) {
            setLoading(false);
            console.error('EmailJS Error:', error);
            alert('Oops, something went wrong. Please try again later.');
        }
    };

    return (
        <Section
            className="pt-[6rem] -mt-[0.65rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="tutorapplication"
        >
            <div className="container mx-auto p-8">
                <h1 className="h1 mb-6 text-center">
                    <span className="inline-block relative ">
                        Tutor Profile{""}
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
                <div className="bg-n-1 text-black flex flex-col md:flex-row mb-8">
                    {/* Image Section */}
                    <div className="flex-shrink-0 md:w-1/3 p-4">
                        <img
                            src={profileimg}
                            alt={tutor.name}
                            className="w-full h-auto rounded-lg shadow-lg object-cover"
                        />
                    </div>

                    {/* Details Section */}
                    <div className="flex flex-col md:w-1/3 p-4">
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
                                        src={index < Math.floor(tutor.rating) ? star : emptystar}
                                        alt={index < Math.floor(tutor.rating) ? 'Filled Star' : 'Empty Star'}
                                        className="w-5 h-5"
                                    />
                                ))}
                            </div>

                        </div>
                    </div>

                    {/* Description Section */}
                    <div className="flex flex-col md:w-1/3 p-4">
                        <h2 className="text-xl font-semibold mb-4">About the Tutor</h2>
                        <p className="text-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
                        </p>
                    </div>
                </div>

                {/* Booking Form */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-6 text-center text-white">Book a Session</h2>
                    <form ref={formRef} onSubmit={handleSubmit}
                          className="mt-4 flex flex-col space-y-4 max-w-md mx-auto">
                        <label className="space-y-2">
                            <span className="field-label text-white">Full Name</span>
                            <input
                                type="text"
                                name="fullName" // Adjusted for EmailJS
                                required
                                value={form.fullName} // Controlled input
                                onChange={handleChange}
                                className="field-input h-10 p-2 rounded-lg w-full"
                                placeholder="Enter your name"
                            />
                        </label>
                        <label className="space-y-2">
                            <span className="field-label text-white">Student Number</span>
                            <input
                                type="text"
                                name="studentNumber" // Adjusted for EmailJS
                                required
                                value={form.studentNumber} // Controlled input
                                onChange={handleChange}
                                className="field-input h-10 p-2 rounded-lg w-full"
                                placeholder="Enter your student number"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label text-white">Email</span>
                            <input
                                type="email"
                                name="email" // Adjusted for EmailJS
                                required
                                value={form.email} // Controlled input
                                onChange={handleChange}
                                className="field-input h-10 p-2 rounded-lg w-full"
                                placeholder="Enter your email"
                            />
                        </label>
                        <label className="space-y-2">
                            <span className="field-label text-white">Module</span>
                            <input
                                type="text"
                                name="module" // Adjusted for EmailJS
                                required
                                value={form.module} // Controlled input
                                onChange={handleChange}
                                className="field-input h-10 p-2 rounded-lg w-full"
                                placeholder="Enter your module"
                            />
                        </label>
                        <label className="space-y-2">
                            <span className="field-label text-white">Qualification</span>
                            <select
                                name="qualification" // Adjusted for EmailJS
                                required
                                value={form.qualification} // Controlled input
                                onChange={handleChange}
                                className="field-input h-10 p-2 rounded-lg w-full"
                            >
                                <option value="">Select qualification</option>
                                <option value="BSc in Computer Science">BSc in Computer Science</option>
                                <option value="BCom in Accounting">BCom in Accounting</option>
                                <option value="BA in English Literature">BA in English Literature</option>
                                {/* Add other qualifications */}
                            </select>
                        </label>
                        <label className="space-y-2">
                            <span className="field-label text-white">Year of Study</span>
                            <select
                                name="yearOfStudy" // Adjusted for EmailJS
                                required
                                value={form.yearOfStudy} // Controlled input
                                onChange={handleChange}
                                className="field-input h-10 p-2 rounded-lg w-full"
                            >
                                <option value="">Select year</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </label>
                        <label className="space-y-2">
                            <span className="field-label text-white">Date of Booking</span>
                            <input
                                type="date"
                                name="bookingDate" // Adjusted for EmailJS
                                required
                                value={form.bookingDate} // Controlled input
                                onChange={handleChange}
                                className="field-input h-10 p-2 rounded-lg w-full"
                            />
                        </label>
                        <label className="space-y-2">
                            <span className="field-label text-white">Time of Booking</span>
                            <input
                                type="time"
                                name="bookingTime" // Adjusted for EmailJS
                                required
                                value={form.bookingTime} // Controlled input
                                onChange={handleChange}
                                className="field-input h-10 p-2 rounded-lg w-full"
                            />
                        </label>
                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Booking...' : 'Book Session'}
                            <img src={arrowup} alt="arrow-up" className="field-btn_arrow"/>
                        </button>
                    </form>
                </div>
            </div>
        </Section>
    );
};

export default TutorProfile;
