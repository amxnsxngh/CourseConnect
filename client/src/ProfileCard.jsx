import React from 'react';
import StudentImage from './assets/student.jpg';

const ProfileCard = () => {
  return (

             <><h2 className="text-2xl font-bold mb-4">Tutor Profile</h2>
             <div className="flex border rounded-lg shadow-lg overflow-hidden">
          <img
              src={StudentImage}
              alt="Student"
              className="w-1/3 object-cover" />

          <div className="p-4 flex flex-col justify-center w-2/3">
              <h5 className="text-lg font-bold">Joe Doe</h5>
              <p className="text-gray-700">Studying lesson plans and reviewing textbooks to prepare for a lesson. Assigning additional projects. Answering a student’s questions about a topic. Helping students understand and learn material. Planning lessons suited to individual student's needs. Providing feedback on student progress.</p>
              <p className="text-gray-700">3rd Year</p>
          </div>
      </div></>
  );
};

export default ProfileCard;


