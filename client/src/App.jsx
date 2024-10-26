import React, { useEffect, useState } from 'react'
import StudentForm from './StudentForm';
import ProfileCard from './ProfileCard';
import './App.css'
import TutorCard from './TutorCard';
import TutorsPage from './TutorsPage';

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(response => response.json()
  ).then (
    data => {
      setBackendData(data) 
    }
  )
  }, [])

  return (
    <div>
      <ProfileCard/>
      <StudentForm />
      {/* {<TutorCard/>}
      {<TutorsPage/>} */}
    </div>
  );
}

export default App


