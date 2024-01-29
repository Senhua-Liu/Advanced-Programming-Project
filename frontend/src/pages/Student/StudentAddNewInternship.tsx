import React, { useState, useEffect, useContext } from 'react';
import Header from '../../components/Header';
import { Flex } from "@chakra-ui/react";
import ReturnFooter from '../../components/ReturnFooter';
import StudentAddNewInternshipC from '../../components/StudentAddNewInternshipC';
import StudentAddNewInternshipC2 from '../../components/StudentAddNewInternshipC2';
import { useUser } from '../../context/UserContext';

const StudentAddNewInternship: React.FC = () => {
  const user = useUser();
  
  return (
    <Flex direction="column" minHeight="100vh">
      <Header userFirstName={user?.user?.firstName} userLastName={user?.user?.lastName} userEmail={user?.user?.email}  message="!!! The second self-evaluation form should be filled before 12/31/2023 00:00:00." />

      <Flex
        direction="column"
        flex="1"
        overflowY="auto" 
        paddingBottom="250px"
        >
        <StudentAddNewInternshipC /> 
        <StudentAddNewInternshipC2 onCompletion={function (): void {
          throw new Error('Function not implemented.');
        } } /> 
      </Flex>

      <ReturnFooter linkPage="/student/home"/>
    </Flex>
  );
};

  
export default StudentAddNewInternship;
   