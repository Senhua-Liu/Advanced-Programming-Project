import React, { useState, useEffect, useContext, ReactNode }  from 'react';
import Header from '../../components/Header';
import { Box,Flex,Link,Text,Image,Button,Stack,Center,Icon } from "@chakra-ui/react";
import {Link as RouterLink, BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Footer from '../../components/Footer';
import ReturnFooter from '../../components/ReturnFooter';

const StudentHome: React.FC = () => {
    const [linkPage, setLinkPage] = useState('');
    const [chatLinkPage, setChatLinkPage] = useState('');

    return (

      <Flex
        direction="column"
        minHeight="100vh"
      >
        <Header userName="student" userEmail="student@efrei.net" message="!!! The second self-evaluation form should be filled before 12/31/2023 00:00:00." />

        <Flex
          direction="column"
          flex="1"
          overflowY="auto" 
          paddingBottom="250px"
          gap={10}
          justify="center"
          align="center"
        >
            <Flex>
                <Link as={RouterLink} to="/student/home"><Text color="#0C2340" fontSize="6xl" fontWeight="bold" >STUDENT SPACE</Text></Link>
            </Flex>
            <Flex gap={10}>
                <Link as={RouterLink} to="/reset"><Button p={8} bgColor="#0C2340" color="white" ><Text fontSize="3xl" fontWeight="bold">RESET PASSWORD</Text></Button></Link>
                <Link as={RouterLink} to="/student/viewallfiles"><Button p={8} bgColor="#0C2340" color="white" ><Text fontSize="3xl" fontWeight="bold">VIEW ALL FILES</Text></Button></Link>
            </Flex>
            <Flex gap={10}>
                <Link as={RouterLink} to="/student/manageinternships"><Button p={8}  bgColor="#0C2340" color="white" ><Text fontSize="3xl" fontWeight="bold">MANAGE INTERNSHIPS</Text></Button></Link>
                <Link as={RouterLink} to="/student/managemeeting"><Button p={8} bgColor="#0C2340" color="white" ><Text fontSize="3xl" fontWeight="bold">MANAGE MEETINGS</Text></Button></Link>
            </Flex>
            <Flex gap={10}>
                <Link as={RouterLink} to="/student/fillfirst"><Button p={8} bgColor="#0C2340" color="white" ><Text fontSize="3xl" fontWeight="bold">FILL ONLINE FORMS</Text></Button></Link>
                <Link as={RouterLink} to="/student/uploadfiles"><Button p={8} bgColor="#0C2340" color="white" ><Text fontSize="3xl" fontWeight="bold">UPLOAD FILES</Text></Button></Link>
            </Flex>
        </Flex>
        {/* <ReturnFooter linkPage={linkPage} /> */}
        <Footer chatLinkPage="/chat/studentChat"  />
      </Flex>
    );
  };
  
  export default StudentHome;
  