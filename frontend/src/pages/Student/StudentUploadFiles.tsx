import React, { useState, useEffect, useContext } from 'react';
import Header from '../../components/Header';
import { Flex } from "@chakra-ui/react";
import ReturnFooter from '../../components/ReturnFooter';
import StudentUploadFilesC from '../../components/StudentUploadFilesC';
//import { FileUpload } from '../../components/FileUpload';// ASSUMING WE HAVE THE COMPONENT, WHICH WE DO NOT HAVE!!!!
import { useUser } from '../../context/UserContext';


const StudentUploadFiles: React.FC = () => {
  const user = useUser();

  return (
    <Flex
    direction="column"
    minHeight="100vh"
  >
      <Header userFirstName={user?.user?.firstName} userLastName={user?.user?.lastName} userEmail={user?.user?.email} message="!!! Deadline of CDC 12/10/2023 00:00 - Deadline of Final Report 12/31/2023 00:00" />
      
      
      <Flex
        direction="column"
        flex="1"
        overflowY="auto" 
        paddingBottom="250px"
      >
        <StudentUploadFilesC /> 
      </Flex> 


      <ReturnFooter linkPage="/student/home"/>
  </Flex>
  );
};

export default StudentUploadFiles;
  