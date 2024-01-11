# create database internship_system; 
show databases;
use internship_system;



# create tables
drop table if exists user;
create table user(
	userID int auto_increment primary key,
    name varchar(255) not null,
    email varchar(255) not null unique,
    password varchar(255) not null,
    type enum('admin', 'student', 'tutor') not null
);

drop table if exists admin;
create table admin(
	userID int primary key,
    systemManager varchar(255),
    foreign key (userID) references user(userID)
);

drop table if exists student;
create table student(
	userID int primary key,
    promotion int not null,
    foreign key (userID) references user(userID)
);

drop table if exists company;
create table company(
	companyID int auto_increment primary key,
    name varchar(255) not null,
    address varchar(255) not null,
    city varchar(255) not null,
    zipCode varchar(255) not null
);

drop table if exists tutor;
create table tutor(
	userID int primary key,
    companyID int not null,
    oldPassword varchar(255) not null,
    telephone varchar(255) not null,
    foreign key (userID) references user(userID),
    foreign key (companyID) references company(companyID)
);

drop table if exists internship;
create table internship(
	internshipID int auto_increment primary key,
    companyID int not null,
    duration int not null,
    type enum('L1', 'L2', 'M1', 'M2') not null,
    jobTitle varchar(255),
    mission varchar(255),
    salary float,
    startDate date,
    endDate date,
    studentID int,
    tutorID int,
    foreign key (companyID) references company(companyID),
    foreign key (studentID) references student(userID),
    foreign key (tutorID) references tutor(userID)
);

drop table if exists authentication;
create table authentication(
	authenticationID int auto_increment primary key,
    type enum('login', 'search files') not null
);

drop table if exists meeting;
create table meeting(
	meetingID int auto_increment primary key,
	type enum('visit', 'defense') not null
);

drop table if exists proposition;
create table proposition(
	propositionID int auto_increment primary key,
    date date,
    location enum('school', 'company', 'visio') not null
);

drop table if exists containProposition;
create table containProposition(
	containPropositionID int auto_increment primary key,
    meetingID int,
    propositionID int,
    foreign key (meetingID) references meeting(meetingID),
    foreign key (propositionID) references proposition(propositionID)
);

drop table if exists file;
create table file(
	fileID int auto_increment primary key,
    type enum('final report', 'CdC', 'first self-evaluation form', 'second self-evaluation form', 'third self-evaluation form', 'intermediate evaluation form', 'final evaluation form', 'fiche visit') not null,
    title varchar(255),
    confidentialLevel enum('normal', 'sensitive') not null,
    content varchar(255),
    owner enum('student', 'tutor') not null
);

drop table if exists viewer;
create table viewer(
	viewerID int auto_increment primary key,
    foreign key (viewerID) references user(userID)
);

drop table if exists containViewer;
create table containViewer(
	containViewerID int auto_increment primary key,
    fileID int,
    viewerID int,
    foreign key (fileID) references file(fileID),
    foreign key (viewerID) references viewer(viewerID)
);

drop table if exists notification;
create table notification(
	notificationID int auto_increment primary key,
    type enum('priviate', 'public') not null,
    alterDuration int,
    avaliableFrom date,
    avaliableTo date,
    content varchar(255)
);

drop table if exists receiver;
create table receiver(
	receiverID int primary key,
    foreign key (receiverID) references user(userID)
);

drop table if exists containReceiver;
create table containReceiver(
	containReceiverID int auto_increment primary key,
	notificationID int,
    receiverID int,
    foreign key (notificationID) references notification(notificationID),
    foreign key (receiverID) references receiver(receiverID)
); 

drop table if exists deadline;
create table deadline(
	deadlineID int auto_increment primary key,
    type enum ('final report', 'first self-evaluation form', 'second self-evalution form', 'third self-evaluation form', 'intermediate evaluation form', 'final evaluation form', 'defense') not null,
    date datetime,
    alertBefore int
);

drop table if exists manageDeadline;
create table manageDeadline(
	manageDeadlineID int auto_increment primary key,
    deadlineID int,
    foreign key (deadlineID) references deadline(deadlineID)
);

drop table if exists manageNotification;
create table manageNotification(
	manageNotification int auto_increment primary key,
    notificationID int,
    foreign key (notificationID) references notification(notificationID)
);



# insert data
insert into internship_system.user (name, email, password, type) values ('admin', 'admin@efrei.fr', 'admin', 'admin');
insert into internship_system.user (name, email, password, type) values ('student1', 'student1@efrei.net', 'student1', 'student');
insert into internship_system.user (name, email, password, type) values ('student2', 'student2@efrei.net', 'student2', 'student');
insert into internship_system.user (name, email, password, type) values ('student3', 'student3@efrei.net', 'student3', 'student');
insert into internship_system.user (name, email, password, type) values ('student4', 'student4@efrei.net', 'student4', 'student');
insert into internship_system.user (name, email, password, type) values ('student5', 'student5@efrei.net', 'student5', 'student');
insert into internship_system.user (name, email, password, type) values ('student6', 'student6@efrei.net', 'student6', 'student');
insert into internship_system.user (name, email, password, type) values ('student7', 'student7@efrei.net', 'student7', 'student');
insert into internship_system.user (name, email, password, type) values ('student8', 'student8@efrei.net', 'student8', 'student');
insert into internship_system.user (name, email, password, type) values ('student9', 'student9@efrei.net', 'student9', 'student');
insert into internship_system.user (name, email, password, type) values ('student10', 'student10@efrei.net', 'student10', 'student');
insert into internship_system.user (name, email, password, type) values ('tutor1', 'tutot1@efrei.com', 'tutor1', 'tutor');
insert into internship_system.user (name, email, password, type) values ('tutor2', 'tutot2@efrei.com', 'tutor2', 'tutor');
insert into internship_system.user (name, email, password, type) values ('tutor3', 'tutot3@efrei.com', 'tutor3', 'tutor');
insert into internship_system.user (name, email, password, type) values ('tutor4', 'tutot4@efrei.com', 'tutor4', 'tutor');
insert into internship_system.user (name, email, password, type) values ('tutor5', 'tutot5@efrei.com', 'tutor5', 'tutor');

INSERT INTO internship_system.admin (userID, systemManager) VALUES (1, 'SystemManager');
INSERT INTO internship_system.student (userID, promotion) VALUES (2, 2024);
INSERT INTO internship_system.student (userID, promotion) VALUES (3, 2025);
INSERT INTO internship_system.student (userID, promotion) VALUES (4, 2026);
INSERT INTO internship_system.student (userID, promotion) VALUES (5, 2027);
INSERT INTO internship_system.student (userID, promotion) VALUES (6, 2028);
INSERT INTO internship_system.student (userID, promotion) VALUES (7, 2024);
INSERT INTO internship_system.student (userID, promotion) VALUES (8, 2025);
INSERT INTO internship_system.student (userID, promotion) VALUES (9, 2026);
INSERT INTO internship_system.student (userID, promotion) VALUES (10, 2027);
INSERT INTO internship_system.student (userID, promotion) VALUES (11, 2028);
insert into internship_system.company (name, address, city, zipCode) values ('IBM', 'address1', 'city1', 'zipCode1');
INSERT INTO internship_system.tutor (userID, companyID, oldPassword, telephone) VALUES (3, 1, 'tutor', '0613546699');




# test queries
#select * from internship_system.user;