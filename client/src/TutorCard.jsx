import React from 'react';

const TutorCard = ({ name, subject, year, email }) => (
  <div className="border rounded-lg shadow-md p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 m-2">
    <h5 className="text-xl font-semibold mb-2">{name}</h5>
    <p className="text-gray-700 mb-1"><strong>Subject:</strong> {subject}</p>
    <p className="text-gray-700 mb-1"><strong>Year:</strong> {year}</p>
    <p className="text-gray-700 mb-1"><strong>Email:</strong> {email}</p>
    <a 
      href={`mailto:${email}`} 
      className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Book
    </a>
  </div>
);

export default TutorCard;
