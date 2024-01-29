import React, { useState, useEffect, useContext }  from 'react';
import Header from '../../components/Header';
import { Flex,Text,Button,VStack,useMediaQuery } from "@chakra-ui/react";
import {Link as RouterLink, BrowserRouter as Router } from "react-router-dom";
import Footer from '../../components/Footer';
import { useUser } from '../../context/UserContext';


const StudentHome: React.FC = () => {
  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');
  const userContext = useUser();



  return (
    <Flex
      direction="column"
      minHeight="100vh"
    >
      <Header userFirstName={userContext?.user?.firstName} userLastName={userContext?.user?.lastName} userEmail={userContext?.user?.email} message="!!! The second self-evaluation form should be filled before 12/31/2023 00:00:00." />

      <VStack
        spacing={8}
        align="stretch"
        flex="1"
        p={8}
        overflowY="auto"
      >
        <Text textAlign="center" color="#0C2340" fontSize="6xl" fontWeight="bold">
          STUDENT SPACE
        </Text>
        <Text textAlign="center" color="#0C2340" fontSize="6xl" fontWeight="bold">
          {userContext?.user?.firstName} {userContext?.user?.lastName} 
        </Text>
        <VStack spacing={5}>
          <Flex justify="space-between" direction={isSmallerThan768 ? 'column' : 'row'}>
            <Button as={RouterLink} to="/reset" bgColor="#0C2340" color="white" p={8} m={6} flex="1" mb={5}>
              RESET PASSWORD
            </Button>
            <Button as={RouterLink} to="/student/viewallfiles" bgColor="#0C2340" color="white" p={8} m={6} flex="1" mb={5}>
              VIEW ALL FILES
            </Button>
          </Flex>
          <Flex justify="space-between" direction={isSmallerThan768 ? 'column' : 'row'}>
            <Button as={RouterLink} to="/student/manageinternships" bgColor="#0C2340" color="white" p={8} m={6} flex="1" mb={5}>
              MANAGE INTERNSHIPS
            </Button>
            <Button as={RouterLink} to="/student/managemeeting" bgColor="#0C2340" color="white" p={8} m={6} flex="1" mb={5}>
              MANAGE MEETINGS
            </Button>
          </Flex>
          <Flex justify="space-between" direction={isSmallerThan768 ? 'column' : 'row'}>
            <Button as={RouterLink} to="/student/fill" bgColor="#0C2340" color="white" p={8} m={6} flex="1" mb={5}>
              FILL ONLINE FORMS
            </Button>
            <Button as={RouterLink} to="/student/uploadfiles" bgColor="#0C2340" color="white" p={8} m={6} flex="1" mb={5}>
              UPLOAD FILES
            </Button>
          </Flex>
        </VStack>
      </VStack>

      <Footer chatLinkPage="/chat/studentChat/"/>
    </Flex>
  );
};

export default StudentHome;