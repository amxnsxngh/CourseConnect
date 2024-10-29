// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header.jsx";
import Home from './pages/Home.jsx'; // Import the Home component
import Tutorlist from './pages/tutorlist.jsx';
import TutorProfile from "./pages/tutorprofile.jsx";
import TutorApplication from "./pages/tutorapplication.jsx";
import TutorDashboard from "./pages/tutordashboard.jsx";
import ScrollToTop from './components/ScrollToTop';
import Footer from "./components/Footer.jsx"; // Import ScrollToTop component

function App() {
    return (
        <Router>
            <Header />
            <ScrollToTop /> {/* Use ScrollToTop component */}
            <Routes>
                <Route path="/" element={<Home />} /> {/* Use Home component for the root path */}
                <Route path="/students" element={<Tutorlist />} />
                <Route path="/tutors" element={<TutorApplication />} />
                <Route path="/tutor/:id" element={<TutorProfile />} />
                <Route path="/tutor-dashboard" element={<TutorDashboard />} />
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
