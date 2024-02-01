# Advanced-Programming-Project


## Goal:
Build a secure, maintainable, and user-friendly web application for EFREI Paris's internship management needs. 
Allow for efficient development and has the potential to incorporate advanced features in future iterations.


# 1. Description:
## 1.1 Technical choices

    Frontend: React, Chakra UI, TypeScript
    Backend: Node.js, Express
    Database: MySQL(Sequelize)


## 1.1.1 Frontend: 
- React: A JavaScript library for building user interfaces. It's an excellent choice for building complex, interactive web applications. React's component-based architecture makes it easy to manage the state and lifecycle of various UI elements, which is ideal for project's requirement of a user-friendly and intuitive interface.
- Chakra UI: This is a simple, modular, and accessible component library that gives us the building blocks to build React applications. Chakra UI will speed up the development process and ensure that the application is accessible and visually appealing.
- TypeScript: A superset of JavaScript that adds static types. Using TypeScript is a wise choice for enhancing code quality, making it easier to maintain, understand, and catch errors early.

## 1.1.2 Backend:
Node.js & Express: Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, and Express is a fast, unopinionated, minimalist web framework for Node.js. This combination is lightweight, efficient, and highly scalable, suitable for handling a large number of simultaneous connections which might be the case with numerous students accessing the system.

## 1.1.3 Database
MySQL with Sequelize: MySQL is a robust and widely-used relational database management system. Sequelize, an ORM for Node.js, will simplify database queries and allow easier manipulation of data. It supports strong data modeling and robust transaction support, which is vital for maintaining the integrity of students' reports and metadata.

## 1.1.4 Analysis
- Scalability & Performance: Node.js and MySQL are scalable solutions that can handle growth in data and user load. React's efficient DOM updates (via its virtual DOM) will keep the UI fast and responsive.
- Security: Managing sensitive internship reports requires a focus on security. The stack supports robust authentication and authorization mechanisms, and Sequelize helps prevent SQL injection attacks.
- Maintainability: The use of TypeScript, along with the modular nature of React and Node.js, aids in keeping the codebase maintainable and well-structured.
- User Experience: React combined with Chakra UI and Tailwind CSS will ensure an engaging and accessible user interface.
- Documentation and Setup: Node.js and React ecosystems are well-documented, which should assist in making the setup and deployment process clear and straightforward.
- Risk and Innovation: Incorporating advanced features like AI/ML for document analysis or advanced search could be a challenging yet innovative addition. Also, using modern architectural patterns like microservices (if deemed necessary) can enhance the project's architecture.



## 1.2 MVP


## 1.3 Architecture(s)


## 1.4 Delivery Methodology


## 1.5 Integration of clean code principles


## 1.6 Future enhancements

must do:
- Provide notifications from admin to students and tutors, about the deadline of files/meetings, and about the some public or private messages that admin wants to talk to the students and tutors.
- Implement the chat part so that admin can talk to students and tutors
- Implement the keyword keyword search for each internship and each file, so that all users (admin, student, tutor) can easily search those internships or files on their account
- Prevent users (students/tutors) upload files or fill forms after pass the deadlines predefined by the admin
- Add another user role called teacher so that the tutor of school can validate the student's files too, and the fiche visit should be filled also by this role (teacher/tutor of school) 
- Add responsive design for all
- For those questions of different forms and files, all should be stocked on the backend database, rather than hardcoding on the frontend side. Another model called question and another router called questionRoutes.js should be created. Each time, the questionnaire of the forms should be fetched directly from the backend database. Also, the admin should be able to add/modify questions of all forms.


can do:
- Real-time notifications: using WebSockets for real-time updates to tutors and students.
- Analytics Dashboard: For insights into internship trends and student performance.
- Mobile Responsiveness: Ensuring the application is fully responsive and accessible on mobile devices.



# 2. Pre-requisites:

# 3. Manual:

# 4. Steps:

## 4.0 BackEnd Node (used technology)
    node server.js


## 4.1 Backend Flask (abandoned technology)
### 4.1.1 activate virtual environment
    cd backend
    python3 -m venv venv
    source venv/bin/activate 
    or venv\Scripts\activate (for windows)
### 4.1.2 install dependencies
    pip install -r backend/requirements.txt
### 4.1.3 run app
    python3 backend/main.py
    or 
    python main.py


## 4.2 Frontend (used technology)


## 4.3 MySQL Database
An old version of MySQL database (cf. the uploaded UML document) was abandoned, because we found that it was difficult to handle so many associations (foreign keys) on the real development of web application. Right now, the new database only contains 2 tables (user and internship). Internship has 2 foreign keys (studentID and tutorID). Here below are the structure of database, and the database's details can be checked from the backendNode folder.


    interface User {
        id?: number;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        type: string;
        telephone: string;
        oldPassword: string;
        promotion: number;
        year: string;
        company: {
            name: string;
            address: string;
            city: string;
            zipCode: string;
        };
    };


    interface Internship {
        id?: number;
        duration: number;
        type: string;
        jobTitle: string;
        mission: string;
        salary: number;
        startDate: Date | string;
        endDate: Date | string;
        studentID?: number;
        tutorID: number;
        meetingList: {
            type: string;
            date: string;
            location: string;
            finished: boolean;
            deadline: "";
        }[];
        files: [
            {category: 1, type: "final report", content: [], confidential: 1, finished: false, deadline: "", message: ""}, 
            {category: 2, type: "CdC", content: [], confidential: 1, finished: false, deadline: "", message: ""},
            {category: 3, type: "fiche visit", content: [], confidential: 0, finished: false, deadline: "", message: ""},
            {category: 4, type: "first self-evaluation form", content: [], confidential: 0, finished: false, deadline: "", message: ""},
            {category: 5, type: "second self-evaluation form", content: [], confidential: 0, finished: false, deadline: "", message: ""},
            {category: 6, type: "third self-evaluation form", content: [], confidential: 0, finished: false, deadline: "", message: ""},
            {category: 7, type: "intermediate evaluation form", content: [], confidential: 0, finished: false, deadline: "", message: ""},
            {category: 8, type: "final evaluation form", content: [], confidential: 0, finished: false, deadline: "", message: ""},
        ];
        status: string;
        student: User;
        tutor: User;
    };




# 5. References: 
## 5.1. Figma 
https://www.figma.com/file/dL9itDvLdbiaw4j4IbSLdV/Bridge_Project_-_Form-(Copy)?type=design&node-id=0%3A1&mode=design&t=BifjF3Fi9aKz1euO-1  

