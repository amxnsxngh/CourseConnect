
-- Create Campus table
CREATE TABLE IF NOT EXISTS Campus (
    campusID INT PRIMARY KEY AUTO_INCREMENT,
    campusName VARCHAR(100) NOT NULL,
    campusImg VARCHAR(255)
) ENGINE=InnoDB;

-- Create Users table
CREATE TABLE IF NOT EXISTS Users (
    userID INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL,
    qualification VARCHAR(255),
    year_of_study TINYINT NOT NULL,
    isTutor BOOLEAN NOT NULL DEFAULT FALSE,
    campusID INT
  
) ENGINE=InnoDB;

-- Create Subjects table
CREATE TABLE IF NOT EXISTS Subjects (
    subjectID INT PRIMARY KEY AUTO_INCREMENT,
    subject_name VARCHAR(100) NOT NULL UNIQUE
) ENGINE=InnoDB;

-- Create Tutor_Teaches table
CREATE TABLE IF NOT EXISTS Tutor_Teaches (
    teachID INT PRIMARY KEY AUTO_INCREMENT,
    tutorID INT NOT NULL,
    subjectID INT NOT NULL,
    date_available VARCHAR(255) NOT NULL
) ENGINE=InnoDB;

-- Create Student_Attends table
CREATE TABLE IF NOT EXISTS Student_Attends (
    attendID INT PRIMARY KEY AUTO_INCREMENT,
    studentID INT NOT NULL,
    subjectID INT NOT NULL
) ENGINE=InnoDB;

-- Create RateTutor table
CREATE TABLE IF NOT EXISTS RateTutor (
    rateID INT PRIMARY KEY AUTO_INCREMENT,
    tutorID INT NOT NULL,
    studentID INT NOT NULL,
    rating TINYINT NOT NULL        
) ENGINE=InnoDB;