import React from 'react';
import TutorCard from './TutorCard'; 

const tutors = [
  { name: 'John Doe', subject: 'Bsc IT Software Engineering', year: '3rd Year', email: 'john@eduvos.com' },
  { name: 'Jane Smith', subject: 'BSC Physics', year: '2nd Year', email: 'jane@eduvos.com' },
  { name: 'Alice Johnson', subject: 'BEng Chemistry', year: '3rd Year', email: 'alice@eduvos.com' },
  { name: 'Mark Wilson', subject: ' BSC Biology', year: '1st Year', email: 'mark@eduvos.com' }
];

const TutorsPage = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-6">Available Tutors</h2>
    <div className="flex flex-wrap justify-center">
      {tutors.map((tutor, index) => (
        <TutorCard
          key={index}
          name={tutor.name}
          subject={tutor.subject}
          year={tutor.year}
          email={tutor.email}
        />
      ))}
    </div>
  </div>
);

export default TutorsPage;
