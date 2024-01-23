import React, { useState, useEffect, useContext, ReactNode }  from 'react';
import Header from '../../components/Header';
import { Box,Flex,Link,Text,Image,Button,Stack,Center,Icon } from "@chakra-ui/react";
import {Link as RouterLink, BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Footer from '../../components/Footer';
import ReturnFooter from '../../components/ReturnFooter';

const StudentHome: React.FC = () => {
    const [linkPage, setLinkPage] = useState('');

    return (

      <Flex
        direction="column"
        minHeight="100vh"
      >
        <Header />

        <Flex flexDir="row" justify="flex-start" gap={20} align="center">
          <Flex flexDir="column" mt={-10} p={3} gap={2}>
            <Flex>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="grey" // Change the background color as needed
                color="white" // Text color
                borderRadius="full" // Makes the box a perfect circle
                width="200px" // Width of the ellipse
                height="150px" // Height of the ellipse
                padding="30px"
              >
                <Text fontSize="3xl" fontWeight="bold">Student</Text>
              </Box>
            </Flex>
            <Flex><Text fontSize="3xl" fontWeight="bold">student@efrei.net</Text></Flex>
          </Flex>

          <Flex>
            <Text fontSize="2xl" fontWeight="bold" bgColor="grey" color="white" p={2} > ! The second self-evaluation form should be filled before 12/31/2023 00:00:00.</Text>
          </Flex>
        </Flex>

        



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
                <Link as={RouterLink} to="/register"><Button p={8} bgColor="#0C2340" color="white" ><Text fontSize="3xl" fontWeight="bold">RESET PASSWORD</Text></Button></Link>
                <Link as={RouterLink} to="/student/viewallfiles"><Button p={8} bgColor="#0C2340" color="white" ><Text fontSize="3xl" fontWeight="bold">VIEW ALL FILES</Text></Button></Link>
            </Flex>
            <Flex gap={10}>
                <Link as={RouterLink} to="/student/manageinternships"><Button p={8}  bgColor="#0C2340" color="white" ><Text fontSize="3xl" fontWeight="bold">MANAGE INTERNSHIPS</Text></Button></Link>
                <Link as={RouterLink} to="/student/managemeeting"><Button p={8} bgColor="#0C2340" color="white" ><Text fontSize="3xl" fontWeight="bold">MANAGE MEETINGS</Text></Button></Link>
            </Flex>
            <Flex gap={10}>
                <Link as={RouterLink} to="/student/managefillfirst"><Button p={8} bgColor="#0C2340" color="white" ><Text fontSize="3xl" fontWeight="bold">FILL ONLINE FORMS</Text></Button></Link>
                <Link as={RouterLink} to="/student/uploadfiles"><Button p={8} bgColor="#0C2340" color="white" ><Text fontSize="3xl" fontWeight="bold">UPLOAD FILES</Text></Button></Link>
            </Flex>
        </Flex>
        {/* <ReturnFooter linkPage={linkPage} /> */}
        <Footer />
      </Flex>
    );
  };
  
  export default StudentHome;
  